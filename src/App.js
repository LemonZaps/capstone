import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <Main />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
