import {Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import './ItemsCard.scss';


export default function ItemsCard({item}) {

    const itemTime = new Date(item.time*1000).toLocaleString('en-GB',{timeZone:'UTC'})

    return (
        <Card className="items-card">
            <Card.Body className="items-card items-card__body">
                <Card.Title className="items-card items-card__title">
                    <NavLink to={`/individual-items/${item.url}`} className="items-card items-card__link-underline">
                        {item.content.replace(`<p>`, '')}
                    </NavLink>
                </Card.Title>
                <Card.Text className="items-card items-card__user">
                    User: {item.user}
                </Card.Text>
                <Card.Text className="items-card items-card__user">
                    Comments count: {item.comments_count}
                </Card.Text>
                <div className="items-card items-card__footer">
                    <Card.Text className="items-card items-card__date">
                        Date published: {itemTime}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}