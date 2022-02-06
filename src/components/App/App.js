import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';

import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import IndividualItemsScreen from "../../screens/HomeScreen/IndividualItemsScreen";
import ItemScreen from "../../screens/HomeScreen/ItemScreen";


import './App.css';

export default function App() {

    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Routes>
                        <Route path="/" element={<HomeScreen/>} exact/>
                        <Route path="/individual-items" element={<IndividualItemsScreen/>}/>
                        <Route path="/individual-items/:id" element={<ItemScreen/>}/>
                    </Routes>
                </Container>
            </main>
            <Footer/>
        </Router>

    );
}


