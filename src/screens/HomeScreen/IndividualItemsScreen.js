import React, {Suspense, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Col, Row} from "react-bootstrap";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";

import {itemsListAction} from "../../actions/itemsActions";

const Items = React.lazy(() => import('../../components/ItemsCard/ItemsCard'));


export default function IndividualItemsScreen() {

    const dispatch = useDispatch();

    const [numOnPage, setNumOnPage] = useState(9);
    const [loader, setLoader] = useState(false);

    const itemsList = useSelector(state => state.itemsList);
    const {loading, error, success, items} = itemsList;

    useEffect(() => {
        dispatch(itemsListAction())
    },[dispatch])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandlerItems)

        return function () {
            document.removeEventListener('scroll', scrollHandlerItems)
        }
    },)

    const scrollHandlerItems = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
            && items.length > numOnPage) {
            setLoader(true)
            setTimeout(() => {
                setLoader(false)
                setNumOnPage(numOnPage+9)
            }, 2000)
        }
    }

    return (
        <div>
            {loading ? <Loader/>
                : error ? <Message variant="danger">{error}</Message>
                    : success
                        ?
                        <Row className="position-relative">
                            <Suspense fallback={<Loader/>}>
                                {items.slice(0, numOnPage).map(item => (
                                    <Col key={item.id} className="my-3" md={6} lg={6} xl={4}>
                                        <Items item={item}/>
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