import React from 'react';
import './Nav.css';

export default function() {
  return (
    <nav >
      <ul className='nav-items'>
          <li key="newproject"><a href='/new-project'>New</a></li>
          <li key="projects"><a href='/projects'>Projects</a></li>
          <li key="about"><a href='/about'>About</a></li>
          <li key="account"><a href='/account'><div className='circle'>RD</div></a></li>
      </ul>
    </nav>
  )
}