import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav'
import CurrentProject from './pages/CurrentProject/CurrentProject';

export default function App(): any  {
  const [result, setResult] = useState("");

  return (
    <BrowserRouter>
      <div className='navigation-menu'>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={ <Home setResult={setResult} /> } />
        <Route path="/project" element={ <CurrentProject result={result}  /> } />
      </Routes>
    </BrowserRouter>
  );
}
