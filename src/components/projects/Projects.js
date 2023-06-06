import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards.js";
import "./ProjectCards.css"
import crm from "../../assets/projects/crm.gif";
import mba from "../../assets/projects/mba.png";

function Projects(props) {
  return (
    <section id="projects">
      <div id={props.id || ""}>
        <Container fluid className="project-section">
            <p className="pro-p"></p>
            <h1 className="pro-h1">Projects</h1>
            <Row className="pro-row">
              <Col md={3} className="project-card">
                <ProjectCard
                  imgPath={crm}
                  isBlog={false}
                  title="CRM"
                  description=""
                  links="https://github.com/Deepavishali/crm-frontend"
                  link="https://github.com/Deepavishali/crm-backend"
                  view="https://crm-app-01d1f.netlify.app/"
                  tech="ReactJS,NodeJS,ExpressJS,MongoDB"
                />
              </Col>

              <Col md={3} className="project-card">
                <ProjectCard
                  imgPath={mba}
                  isBlog={false}
                  title="Movie Application"
                  description=""
                  links="https://github.com/Deepavishali/movie-frontend-app.git"
                  link="https://github.com/Deepavishali/movie-backend-app.git"
                  view="https://web-2-movie-booking.netlify.app/"
                  tech="ReactJS,NodeJS,ExpressJS,MongoDB"
                />
              </Col>

            {/* <Col md={3} className="project-card">
              <ProjectCard
                imgPath={crm}
                isBlog={false}
                title="Movie Application"
                description=""
                links="https://github.com/Deepavishali/movie-frontend-app.git"
                link="https://github.com/Deepavishali/movie-backend-app.git"
                view="https://web-2-movie-booking.netlify.app/"
                tech="ReactJS,NodeJS,ExpressJS,MongoDB"
              />
            </Col> */}

            {/* <Col md={3} className="project-card">
              <ProjectCard
                imgPath={crm}
                isBlog={false}
                title="Movie Application"
                description=""
                links="https://github.com/Deepavishali/movie-frontend-app.git"
                link="https://github.com/Deepavishali/movie-backend-app.git"
                view="https://web-2-movie-booking.netlify.app/"
                tech="ReactJS,NodeJS,ExpressJS,MongoDB"
              />
            </Col> */}
            </Row>
          </Container>
       
      </div>
    </section>
  );
}

export default Projects;

