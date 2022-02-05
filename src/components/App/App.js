import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';

import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";

import './App.css';

export default function App() {

    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Routes>
                        <Route path="/" element={<HomeScreen/>} exact/>
                    </Routes>
                </Container>
            </main>
            <Footer/>
        </Router>

    );
}


