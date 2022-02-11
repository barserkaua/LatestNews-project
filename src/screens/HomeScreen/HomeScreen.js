import React, {Suspense, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Row, Col} from "react-bootstrap";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";

import {latestNewsListAction} from "../../actions/newsActions";

const NewsCard = React.lazy(() => import('../../components/NewsCard/NewsCard'));
const SortMenu = React.lazy(() => import('../../components/SortMenu/SortMenu'));


export default function HomeScreen() {

    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [loadNews, setLoadNews] = useState([]);
    const [fetching, setFetching] = useState(true);


    const latestNewsList = useSelector(state => state.latestNewsList);
    const {success, latestNews} = latestNewsList;

    const newsSortByTitle = useSelector(state => state.newsSortByTitle);
    const {sortByTitle} = newsSortByTitle;

    const newsSortByOldestDate = useSelector(state => state.newsSortByOldestDate);
    const {sortByOldestDate} = newsSortByOldestDate;

    const newsSortByNewestDate = useSelector(state => state.newsSortByNewestDate);
    const {sortByNewestDate} = newsSortByNewestDate;

    // Take data Effect from API
    useEffect(() => {
        if (fetching) {
            console.log("fetching")
            dispatch(latestNewsListAction(currentPage))
        }
        document.title = 'Home screen';
    }, [dispatch, fetching])

    // load data from global state to our local state, where we have all data from each page that was loading
    useEffect(() => {
        if (success) {
            setLoadNews([...loadNews, ...latestNews])
            setFetching(false)
            setCurrentPage(currentPage + 1)
        }
    }, [success])

    // we check, if we scrolled our page in bottom, and if true we load new data
    const scrollHandlerNews = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
            && latestNews.length > currentPage) {
            setFetching(true)
        }
    }

    // we activate our componentDidMount effect on our scroll Handler
    useEffect(() => {
        document.addEventListener('scroll', scrollHandlerNews)

        return function () {
            document.removeEventListener('scroll', scrollHandlerNews)
        }
    })


    // Sort menu
    if (sortByTitle) {
        loadNews.sort((a, b) => a.title > b.title && 1 || -1)
    }
    if (sortByOldestDate) {
        loadNews.sort((a, b) => a.time > b.time && 1 || -1)
    }
    if (sortByNewestDate) {
        loadNews.sort((a, b) => a.time < b.time && 1 || -1)
    }

    return (
        <div>
            <Row className="position-relative">
                <Suspense fallback={<Loader/>}>
                    <SortMenu/>
                </Suspense>
                <Suspense fallback={<Loader/>}>
                    {loadNews.map((news, index) => (
                        <Col className="my-3" key={index} md={6} lg={6} xl={4}>
                            <NewsCard news={news}/>
                        </Col>
                    ))}
                </Suspense>
            </Row>
        </div>
    )
}