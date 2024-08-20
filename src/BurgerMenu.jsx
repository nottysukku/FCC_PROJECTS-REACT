import React, { useState, useEffect } from 'react';
import './BurgerMenu.css'; // We'll define styles here

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMobile && (
        <div className="burger-menu">
          <button className="burger-button" onClick={toggleMenu}>
            ☰
          </button>
          {isMenuOpen && (
            <div className="menu">
              <a className="nav-link" href="#Introduction">Introduction</a>
              <a className="nav-link" href="#History">History</a>
              <a className="nav-link" href="#Synopsis">Synopsis</a>
              <a className="nav-link" href="#Appearance">Appearance</a>
              <a className="nav-link" href="#Name_Origin">Name Origin</a>
              <a className="nav-link" href="#Personality_and_Characteristics">Personality and Characteristics</a>
              <a className="nav-link" href="#Gadgets">Gadgets</a>
              <a className="nav-link" href="#Relationship_with_Nobita">Relationship with Nobita</a>
              <a className="nav-link" href="#Dark_Side_of_Doraemon">Dark Side of Doraemon</a>
              <a className="nav-link" href="#Conclusion">Conclusion</a>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
