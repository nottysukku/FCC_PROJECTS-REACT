
import './App.css'
import Foot from './components/Foot'


function App() {
  return (
    <>
  

      <div id="body1" className='body1'>
        <nav id="navbar1">
          <a href="https://www.linkedin.com/in/sukrit-chopra-5923a9215/" target='_blank'>Let's Connect!</a>
          <a href="#projects">Projects</a>
          <a href="https://github.com/nottysukku" target="_blank" rel="noopener noreferrer">About Me</a>
        </nav>

        <div id="welcome-section">
          <h1 id="headd" className="main-heading font-bold">Hey, I'm Sukrit Chopra <br />A Web Developer</h1>
        </div>

        <div id="projects">
          <h2 className='font-extrabold text-5xl'>Projects from the Responsive Web Design Course</h2>
          <div className="project_cards">
            <a onClick={()=>{
              window.open('https://survey-react-murex.vercel.app/', '_blank')
            }} className="project-tile cursor-pointer"  rel="noopener noreferrer">
              <div className="card">
                <img src="https://i.imghippo.com/files/cow7F1715075505.png" alt="Survey Form" />
                <h2 className="card-title">Survey Form</h2>
              </div>
            </a>
            <a onClick={()=>{
              window.open('https://tribute-page-rosy.vercel.app/', '_blank')
            }}className="project-tile cursor-pointer"  rel="noopener noreferrer">
              <div className="card">
                <img src="https://i.imghippo.com/files/wnLjG1715075625.png" alt="Tribute Page" />
                <h2 className="card-title">Tribute Page</h2>
              </div>
            </a>
            <a onClick={()=>{
              window.open('https://doraemon-documentation.vercel.app/', '_blank')
            }} className="project-tile cursor-pointer"  rel="noopener noreferrer">
              <div className="card">
                <img src="https://i.imghippo.com/files/6ru1h1715075573.png" alt="Technical Documentation Page" />
                <h2 className="card-title">Technical Documentation Page</h2>
              </div>
            </a>
            <a onClick={()=>{
              window.open('https://product-page-rust.vercel.app/', '_blank')
            }} className="project-tile cursor-pointer"  rel="noopener noreferrer">
              <div className="card">
                <img src="https://i.imghippo.com/files/JE4kk1715075604.png" alt="Product Landing Page" />
                <h2 className="card-title">Product Landing Page</h2>
              </div>
            </a>
          </div>
        </div>

        <div className="social_icons" id="social_icons asds">
          <a href="#asds" className="profile-link">
            <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" alt="Facebook" />
          </a>
          <a href="#" className="profile-link">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Instagram_logo.png/240px-Instagram_logo.png" style={{ filter: 'invert()' }} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/sukrit-chopra-5923a9215/" className="profile-link" target="_blank" rel="noopener noreferrer">
            <img src="https://banner2.cleanpng.com/20180417/qaw/kisspng-computer-icons-linkedin-social-media-next-button-5ad5b1b7cea3b6.9329082615239541038464.jpg" alt="LinkedIn" />
          </a>
          <a href="#" className="profile-link">
            <img src="https://cdn-icons-png.flaticon.com/512/4401/4401475.png" alt="Twitter" />
          </a>
        </div>
        <Foot/>
      </div>
     
    </>
  )
}

export default App
