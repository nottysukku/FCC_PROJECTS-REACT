import React, { useEffect } from 'react';
import { motion } from 'framer-motion';  // Import framer-motion
import './App.css';
import Foot from './components/Foot';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar1');
      if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 0.9)';
      } else {
        navbar.style.backgroundColor = 'transparent';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div id="body1" className='body1'>
        <nav id="navbar1">
          <a href="https://www.linkedin.com/in/sukrit-chopra-5923a9215/" target='_blank' rel="noopener noreferrer">Let's Connect!</a>
          <a href="#projects">Projects</a>
          <a href="https://github.com/nottysukku" target="_blank" rel="noopener noreferrer">About Me</a>
        </nav>

        <div id="welcome-section">
          <motion.h1
            id="headd"
            className="lg:text-8xl text-4xl font-extrabold bg-gradient-to-br from-blue-900 via-black to-blue-900 bg-clip-text text-transparent cursor-pointer"
            initial={{ opacity: 0, y: 250 }}  // Start with opacity 0 and translateY 50px
            animate={{ opacity: 1, y: 0 }}   // Animate to opacity 1 and translateY 0
            transition={{ duration: 1, ease: "easeOut" }}  // Transition settings
            whileHover={{ scale: 1.1 }}  // Hover animation (scale)
            whileTap={{ scale: 1.8, transition: { duration: 0.5 } }}  // Active (tap) animation
          >
            Hey, I'm Sukrit Chopra <br />A Web Developer <br />(React.JS)
          </motion.h1>
        </div>

        <div id="projects">
          <h2>Projects from the Responsive Web Design Course</h2>
          <div className="project_cards">
            {[
              { url: 'https://survey-react-murex.vercel.app/', img: 'https://i.imghippo.com/files/cow7F1715075505.png', title: 'Survey Form' },
              { url: 'https://tribute-page-rosy.vercel.app/', img: 'https://i.imghippo.com/files/wnLjG1715075625.png', title: 'Tribute Page' },
              { url: 'https://doraemon-documentation.vercel.app/', img: 'https://i.imghippo.com/files/6ru1h1715075573.png', title: 'Technical Documentation Page' },
              { url: 'https://product-page-rust.vercel.app/', img: 'https://i.imghippo.com/files/JE4kk1715075604.png', title: 'Product Landing Page' },
            ].map((project, index) => (
              <a key={index} onClick={() => window.open(project.url, '_blank')} className="project-tile cursor-pointer" rel="noopener noreferrer">
                <div className="card">
                  <img src={project.img} alt={project.title} />
                  <h2 className="card-title">{project.title}</h2>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="social_icons" id="social_icons">
          {[
            { url: '#', img: 'https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png', alt: 'Facebook' },
            { url: '#', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Instagram_logo.png/240px-Instagram_logo.png', alt: 'Instagram', style: { filter: 'invert()' } },
            { url: '#', img: 'https://cdn-icons-png.flaticon.com/512/4401/4401475.png', alt: 'Twitter' },
          ].map((social, index) => (
            <a key={index} href={social.url} className="profile-link">
              <img src={social.img} alt={social.alt} style={social.style} />
            </a>
          ))}
        </div>
        <Foot />
      </div>
    </>
  );
}

export default App;
