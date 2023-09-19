import React, { FC } from "react";
import { useNavigate } from 'react-router-dom';
import './Nav.css';

interface LoaderProps {
  userName: string;
}

const Nav: FC<LoaderProps> = ({ userName }) => {
  const navigate = useNavigate();
  
  return (
    <nav>
      <ul className='nav-items'>
        <li key="newproject" className="nav-item" onClick={() => navigate('/')}>New</li>
        <li key="projects" className="nav-item" onClick={() => navigate('/projects')}>Projects</li>
        <li key="about" className="nav-item" onClick={() => navigate('/about')}>About</li>
        <li key="account" onClick={() => navigate('/account')}>
          <div className='circle'>{userName}</div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav