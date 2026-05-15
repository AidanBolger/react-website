import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/pages/Home';
import Projects from './components/pages/Projects';
import AboutPage from './components/pages/About';
import WorkTermPage from './components/pages/WorkTerm';
import WorkTermPageTwo from './components/pages/WorkTermTwo';
import WolvesPage from './components/pages/WolvesPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/workterm' replace />} />
          <Route path='/home' Component={HomePage}/>
          <Route path='/projects' Component={Projects}/>
          <Route path='/about' Component={AboutPage}/>
          <Route path='/workterm' Component={WorkTermPage}/>
          <Route path='/worktermtwo' Component={WorkTermPageTwo}/>
          <Route path='/wolvesvsheep' Component={WolvesPage}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
