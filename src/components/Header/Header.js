import {Navbar, Nav, Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import './Header.css'

export default function Header() {

    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <NavLink to='/' className='brand-link'>
                            Latest News
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="navigation-btn" to="/individual-items">Individual items</NavLink>
                        </Nav>
                        <Nav>
                            <Nav.Link
                                target="_blank"
                                href="https://github.com/barserkaua/LatestNews-project">
                                <i className="fab fa-github"></i>GitHub Repo</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}