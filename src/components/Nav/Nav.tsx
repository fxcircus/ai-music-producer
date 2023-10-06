import React, { FC, useState, useEffect, useRef } from "react";
import './Nav.css';
import { useNavigate } from 'react-router-dom';
import { dummyProjects } from '../../utilities/aux/dummyProjects';
import { getProjects } from "../../utilities/api/projects/projects";

interface LoaderProps {
  userName: string;
}

const Nav: FC<LoaderProps> = ({ userName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  useEffect(() => {
    console.log(dummyProjects);

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick); // Clean up the event listener when the component unmounts
    };
  }, []);

  const getProjectIds = async () => {
    const projectIds = await getProjects()
    console.log(projectIds)
  }

  useEffect(() => {
    getProjectIds()
  }, [])

  const handleDocumentClick = (event: MouseEvent) => {
    // Check if the click occurred outside of the menu and not inside any menu item
    if (menuRef.current && !(menuRef.current as HTMLElement).contains(event.target as Node)) {
      setIsOpen(false)
    }
  };

  const openProject = (projectId: string) => {
    setIsOpen(false)
    navigate(`/projects/${projectId}`)
  };



  return (
    <nav className='nav-container'>
      <ul className='nav-items'>
        <li key="newproject" className="nav-item" onClick={() => navigate('/')}>New</li>
        <li key="projects" className="nav-item" onClick={toggleMenu}>Projects</li>
        <li key="about" className="nav-item" onClick={() => navigate('/about')}>About</li>
        <li key="account" onClick={() => navigate('/account')}>
          <div className='circle'>{userName}</div>
        </li>
      </ul>
      {isOpen && (
        <ul className='menu-items' ref={menuRef}>
          {dummyProjects.map((project, index) => (
            <div key={index} className="menu-item" onClick={(e) => {openProject(project.id) }}>
              <p className="project-title">{project.name}</p>
              <p className="project-date">{project.date}</p>
            </div>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Nav;
