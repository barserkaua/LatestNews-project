import React, {Suspense, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Row, Col} from "react-bootstrap";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import uniq from "lodash/uniq";

import {latestNewsListAction} from "../../actions/newsActions";

const NewsCard = React.lazy(() => import('../../components/NewsCard/NewsCard'));
const SortMenu = React.lazy(() => import('../../components/SortMenu/SortMenu'));

export default function HomeScreen() {

    const dispatch = useDispatch();

    const [numOnPage, setNumOnPage] = useState(9);
    const [loader, setLoader] = useState(false);


    const latestNewsList = useSelector(state => state.latestNewsList);
    const {loading, error, success, latestNews} = latestNewsList;

    const newsSortByTitle = useSelector(state => state.newsSortByTitle);
    const {sortByTitle} = newsSortByTitle;

    const newsSortByOldestDate = useSelector(state => state.newsSortByOldestDate);
    const {sortByOldestDate} = newsSortByOldestDate;

    const newsSortByNewestDate = useSelector(state => state.newsSortByNewestDate);
    const {sortByNewestDate} = newsSortByNewestDate;

    useEffect(() => {
        dispatch(latestNewsListAction({sortByTitle, sortByOldestDate, sortByNewestDate}))
        document.title = 'Home screen';
    }, [dispatch, sortByTitle, sortByOldestDate, sortByNewestDate])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandlerNews)

        return function () {
            document.removeEventListener('scroll', scrollHandlerNews)
        }
    },)

    const scrollHandlerNews = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
            && latestNews.length > numOnPage) {
            setLoader(true)
            setTimeout(() => {
                setLoader(false)
                setNumOnPage(numOnPage+9)
            }, 2000)
        }
    }

    return (
        <div>
            { loading ? <Loader/>
                : error ? <Message variant="danger">{error}</Message>
                    : success ?
                    <Row className="position-relative">
                        <Suspense fallback={<div/>}>
                            <SortMenu/>
                        </Suspense>
                        <Suspense fallback={<Loader/>}>
                            {latestNews.slice(0, numOnPage).map(news => (
                                <Col className="my-3" key={news.id} md={6} lg={6} xl={4}>
                                    <NewsCard news={news}/>
                                </Col>
                            ))}
                        </Suspense>
                        {loader ? <Loader/> : <div/>}
                    </Row>

                : <div/>
            }
        </div>
    )
}