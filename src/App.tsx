import React from 'react';
import './App.css';
import { useState } from "react";
import Nav from './components/Nav/Nav'
import NewProject from './components/NewProject/NewProject';
import Experiment from './components/Experiment/Experiment';

export default function App(): any  {

  return (
    <div className="App">
      <Nav />
      <NewProject />
      {/* <Experiment /> */}
    </div>
  );
}
