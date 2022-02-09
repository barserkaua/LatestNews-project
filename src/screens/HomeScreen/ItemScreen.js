import React, {Suspense, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";
import {Col, Row} from "react-bootstrap";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";

const UserComments = React.lazy(() => import('../../components/UserCommentsCard/UserCommentsCard'));


export default function ItemScreen() {

    const dispatch = useDispatch();
    // we get current user id
    const location = useLocation();

    const currentUserId = Number(location.search.replace('?id=', ''))

    const [userComments, setUserComments] = useState([]);
    const [userName, setUserName] = useState('');

    const itemsList = useSelector(state => state.itemsList);
    const {loading, error, success, items} = itemsList;



    useEffect(() => {


        if (success) {
            items.forEach(item => {
                if (item.id === currentUserId) {
                    setUserComments(item.comments)
                    setUserName(item.user)
                }
            })
        }
    }, [dispatch, success])

    useEffect(() => {
        document.title = `User: ${userName}`;
    })

    return (
        <div>
            {loading ? <Loader/>
                : error ? <Message variant="danger">{error}</Message>
                    : success ?
                        <Row className="d-flex justify-content-center">
                            <h2 className="text-center my-3">List of comments to {userName} comment</h2>
                            <Suspense fallback={<Loader/>}>
                                {userComments.map(comment => (
                                    <Col key={comment.id} className="my-3" xl={10}>
                                        <UserComments comment={comment}/>
                                    </Col>
                                ))}
                            </Suspense>
                        </Row>
                        : <div/>
            }

        </div>
    )
}