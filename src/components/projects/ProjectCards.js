import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ProjectCards.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text className="tech-used">
          <span>Tech_used :</span><br/>
          {props.tech}
        </Card.Text>
        <div className="btn-group">
          <Button variant="info" href={props.links} target="_blank">
            {props.isBlog ? "View Blog" : "Frontend"}
          </Button>&nbsp;&nbsp;
          {props.link ? (
            <Button variant="info" href={props.link} target="_blank">
              {props.isBlog ? "View Blog" : "Backend"}
            </Button>
          ) : (
            ""
          )}
          &nbsp;&nbsp;<Button variant="info" href={props.view} target="_blank">
            {props.isBlog ? "View Blog" : "Live"}
          </Button>
        </div>
        {props.id ? (
          <Card.Text className="card-text demo-info">
            demo-id: {props.id}, password: {props.password}
          </Card.Text>
        ) : (
          ""
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
