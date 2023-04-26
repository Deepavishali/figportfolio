import React from "react";
import "./Navigation.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function Navigation(){

  const handleNavClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    
    <Navbar className="nav-port">
      <Container>
        <Navbar.Brand href="#home" className="brand-name">
          Deepa Vishali G
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="#home" className="nav-link" onClick={handleNavClick}>
            Home
          </Nav.Link>
          <Nav.Link href="#aboutme" className="nav-link" onClick={handleNavClick}>
            About Me
          </Nav.Link>
          <Nav.Link href="#skills" className="nav-link" onClick={handleNavClick}>
            Skills
          </Nav.Link>
          <Nav.Link href="#projects" className="nav-link" onClick={handleNavClick}>
            Projects
          </Nav.Link>
          <Nav.Link href="#contactme" className="nav-link" onClick={handleNavClick}>
            Contact Me
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
