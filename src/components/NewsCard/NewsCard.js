import {Card, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import './NewsCard.css';

export default function NewsCard({news}) {

    const newsTime = new Date(news.time*1000).toLocaleString('en-GB',{timeZone:'UTC'})

    return (
        <Card className="news-card">
            <Card.Body>
                <Card.Title >
                    <NavLink to={`/${news.title}`} className="news-card news-card__link-underline">
                        {news.title}
                    </NavLink>
                </Card.Title>
                <Card.Link >{news.domain}</Card.Link>
                <Card.Text>
                    {newsTime}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}