import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import profileImage from '../../../assets/1-removebg-preview.png';
import './Profile.css';

function Profile() {
  return (
    <section id="home">
      <Container>
        <Row noGutters>
          <Col md={6} className="d-flex flex-column justify-content-start px-0">
            <h4 className="font-weight-bold text-yellow mb-0" id="profile-heading">MERN Stack Developer</h4>
            <h1 className="font-weight-bold mb-0" id="profile-name">Hello, my name is Deepa Vishali G</h1>
            <div className="my-3">
              <h3 className="font-weight-bold mb-0" id="profile-description">I am a continuous learner with a passion for exploring new technologies and techniques to improve my skills.</h3>
            </div>
            <div>
              <Button variant="outline-warning" className="text-dark mr-2" id="hire-button" >Hire Me</Button>&nbsp;&nbsp;
              <Button variant="outline-warning" className="text-dark" id="resume-button">Resume</Button>
            </div>
          </Col>
          <Col md={6} className="px-0">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Profile;
