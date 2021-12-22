import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { HikerProvider } from './context/Hiker';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Signup from './components/Signup'
import Login from './components/Login'
import Trails from './components/Trails';
import EditTrailForm from './components/EditTrailForm';

function App() {
  return (
    <div className="App">
      <HikerProvider>
        
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/trails" element={<Trails />} />
          </Routes>
        </Router>        
      </HikerProvider>
    </div>
  );
}

export default App;
