import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Compliance from './Compliance';
import Support from './Support';
import Login from './Login';
import Signup from './Signup';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function App() {
    return (
        <Router>
            <div className="App">
                <ScrollToTop />
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/compliance" element={<Compliance />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

