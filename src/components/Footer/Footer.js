import {Container, Row, Col} from "react-bootstrap";

export default function Footer () {
    return (
        <footer className="bg-primary text-white">
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; TestTask</Col>
                </Row>
            </Container>
        </footer>
    )
}