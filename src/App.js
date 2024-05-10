import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/pages/Home';
import Projects from './components/pages/Projects';
import AboutPage from './components/pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={HomePage}/>
          <Route path='/projects' Component={Projects}/>
          <Route path='/about' Component={AboutPage}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
