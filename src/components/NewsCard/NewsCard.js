import {Card, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import './NewsCard.css';

export default function NewsCard({news}) {


    return (
        <Card style={{ width: '100%', height:'100%' }}>
            <Card.Body>
                <Card.Title >
                    <NavLink to={`/${news.title}`} className="link-underline">
                        {news.title}
                    </NavLink>
                </Card.Title>
                <Card.Link >{news.domain}</Card.Link>
                <Card.Text>
                    {Date(news.time).slice(0, 24)}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}