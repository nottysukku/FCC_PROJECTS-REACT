import React, { useEffect } from 'react';
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
          <h1 id="headd" className="main-heading">
            Hey, I'm Sukrit Chopra <br />A Web Developer
          </h1>
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