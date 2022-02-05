import {Spinner} from "react-bootstrap";

export default function Loader() {
    return(
        <Spinner
            animation="grow"
            role="status"
            variant="primary"
            style={{
                height: '100px',
                width: '100px',
                margin: '150px auto',
                display: 'block',
            }}
        >
        </Spinner>
    )
}
