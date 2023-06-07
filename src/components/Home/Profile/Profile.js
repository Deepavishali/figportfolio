import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
//import profileImage from '../../../assets/1-removebg-preview.png';
import yellow from '../../../assets/profile/yellow.png';
import deepafigma from '../../../assets/profile/deepafigma.png';

//import girlpic from '../../../assets/profile/girlpic.png'
//import semicircle from '../../../assets/profile/semicircle.png';
import './Profile.css';

function Profile() {
  return (
    <section id="home">
      <Container>
        <Row noGutters>
          <Col md={6} className="" id="left-col">
            <h4 className="font-weight-bold text-warning mb-0 pt-5" id="profile-heading">MERN Stack Developer</h4>
            <h1 className="font-weight-bold mb-0" id="profile-name">Hello, my name is Deepa Vishali G</h1>
            <div className="my-3">
              <h3 className="font-weight-bold mb-0" id="profile-description">I am a continuous learner with a passion for exploring new technologies and techniques to improve my skills.</h3>
            </div>
            <div>
              <Button variant="outline-warning" className="text-dark mr-2" id="hire-button"
                onClick={() => document.getElementById('contactme').scrollIntoView({ behavior: 'smooth' })}
              >

                Hire Me
              </Button>&nbsp;&nbsp;

              <Button variant="outline-warning"
                className="text-dark"
                id="resume-button"
                href="https://drive.google.com/file/d/1woAUhruqlyLbW6tbvRab6eYzKPSEDarQ/view?usp=drive_link"
                target="_blank">
                Resume
              </Button>
            </div>
          </Col>
          <Col md={6} className="px-0 position-relative">
            <img src={yellow} alt="profile" width="673px" height="550px" className="yellow-bg"/>
            <img src={deepafigma} alt="profile" width="250" height="500px" className='position-absolute deepafigma' id='deepafig'/>


            {/* </img> */}
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Profile;
