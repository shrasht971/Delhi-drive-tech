import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
const App = () =>(
  <div>
  <Router>
  <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  <Footer />
  </Router>
  </div>
);

export default App;
