import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require('../assets/images/IMG_5759.JPG')} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/meesum-abbas" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/meesum-abbas-758989213/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Meesum Abbas</h1>
          <p>Full Stack Engineer</p>
          
          <div className="resume-download">
            <a 
              href={require('../assets/Meesum_Abbas_Resume.pdf')} 
              download="Meesum_Abbas_Resume.pdf"
              className="resume-btn"
            >
              <DownloadIcon /> Download Resume
            </a>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;