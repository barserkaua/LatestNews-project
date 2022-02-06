import {Card} from "react-bootstrap";


export default function UserCommentsCard({comment}) {

    const commentTime = new Date(comment.time*1000).toLocaleString('en-GB',{timeZone:'UTC'})

    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    {comment.content.replace(`<p>`, '')}
                </Card.Title>
                <Card.Text className="text-center my-3">
                    User: <span className="fw-bold"> {comment.user}</span>
                </Card.Text>
                <div>
                    <Card.Text className="text-end">
                        Date published: {commentTime}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}