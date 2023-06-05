import React from "react";
//import ScreenHeading from "../../utilities/screenHeading.js";
import Button from 'react-bootstrap/Button';
import './About.css'

function AboutMe(props) {
   const SCREEN_CONSTANTS = {
      description:
        "I'm a Full Stack Web Developer with expertise in MERN stacks. I have a keen eye for detail and strive for exceptional results. I'm well-versed in MongoDB, Express.js, React.js, Node.js, RESTful APIs, authentication, and database design. I'm highly motivated and committed to delivering projects on time and budget. I'm always looking for ways to enhance efficiency and productivity. I'm confident that I can be an asset to any organization as a Full Stack Web Developer.",
      highlights: {
        bullets: [
          " Skilled in full-stack web development with an emphasis on interactive front-end design.",
          " Proficient in using JWT authentication and implementing protected routes for data security.",
          " Experienced in managing databases and ensuring effective state management using React Redux"
          ],
        heading: "Here are a Few Highlights:",
      },
    };
  
    const renderHighlight = () => {
      return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
        <div className="highlight" key={i}>
          <div className="highlight-blob"></div>
          <span>{value}</span>
        </div>
      ));
    };
    return (
      <section id="aboutme">
      <div className="about-me-container screen-container" id={props.id || ""}>
        <div className="about-me-parent">
          <h1>About Me</h1>
          <div className="about-me-card">
            <div className="about-me-profile"></div>
            <div className="about-me-details">
              <span className="about-me-description">
                {SCREEN_CONSTANTS.description}
              </span>
              <div className="about-me-highlights">
                <div className="highlight-heading">
                  <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                </div>
                {renderHighlight()}
              </div>
              <div className="about-me-options">
              <Button variant="outline-warning" 
              style={{color:"black"}}
              onClick={() => document.getElementById('contactme').scrollIntoView({behavior: 'smooth'})}
              >
                Hire me
                </Button>&nbsp;&nbsp;
                <a
                  href="https://www.canva.com/design/DAFfyURGd1A/eYOpsYEgZsEq6RjFqJNnfg/view?utm_content=DAFfyURGd1A&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  target="_blank"
                  rel="noreferrer"
                >
                 <Button variant="outline-warning" style={{color:"black"}}>Resume</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
  
  export default AboutMe;
  