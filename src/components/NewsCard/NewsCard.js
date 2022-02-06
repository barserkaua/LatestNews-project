import {Card, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import './NewsCard.scss';

export default function NewsCard({news}) {

    const newsTime = new Date(news.time*1000).toLocaleString('en-GB',{timeZone:'UTC'})

    return (
        <Card className="news-card">
            <Card.Body className="news-card news-card__body">
                <Card.Title className="news-card news-card__title">
                    <Card.Link target="_blank" href={news.url} className="news-card news-card__link-underline">
                        {news.title}
                    </Card.Link>
                </Card.Title>
                <Card.Text className="news-card news-card__domain">
                    Domain: <Card.Link>{news.domain}</Card.Link>
                </Card.Text>
                <div className="news-card news-card__footer">
                    <Button target="_blank" href={news.url} variant="primary">Read more</Button>
                    <Card.Text className="news-card news-card__date">
                        {newsTime}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}