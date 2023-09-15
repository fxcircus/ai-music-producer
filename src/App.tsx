import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav'

export default function App(): any  {

  return (
    <BrowserRouter>
      <div className='navigation-menu'>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
