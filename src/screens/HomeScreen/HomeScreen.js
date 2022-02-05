import React, {Suspense, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Row, Col} from "react-bootstrap";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";

import {latestNewsListAction} from "../../actions/newsActions";

const NewsCard = React.lazy(() => import('../../components/NewsCard/NewsCard'));

export default function HomeScreen() {

    const dispatch = useDispatch();

    const [numOnPage, setNumOnPage] = useState(9);
    const [loader, setLoader] = useState(false);


    const latestNewsList = useSelector(state => state.latestNewsList);
    const {loading, success, error, latestNews} = latestNewsList;

    useEffect(() => {
        dispatch(latestNewsListAction())
    }, [dispatch])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    },)

    const scrollHandler = (e) => {
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
            { success ?
                <Row>
                    {latestNews.slice(0, numOnPage).map(news => (
                        <Col className="my-3" key={news.id} md={4}>
                            <Suspense fallback={<Loader/>}>
                                <NewsCard news={news}/>
                            </Suspense>
                        </Col>
                    ))}
                    {loader ? <Loader/> : <div/>}
                    </Row>
                : <div/>
            }
        </div>
    )
}