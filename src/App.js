import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <>
      <Header />
      <Main />
      <Footer />
    </>
    </Router>
  );
}

export default App;

//All Routing and links need to be added, CSS needs to be set up and cards need to be finished 