import React from "react";
import "./Navigation.css";
import { Nav } from "react-bootstrap";

function Navigation() {

  const handleNavClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (

    <nav className="nav-port">
      <div className="nav-cont">
        <h1 href="#home" className="brand-name">
          Deepa Vishali G
        </h1>

        <div className="bg-warning">
          <Nav className="nav-icons">
            <Nav.Link href="#home" className="nav-link " onClick={handleNavClick}>
              Home
            </Nav.Link>
            <Nav.Link href="#aboutme" className="nav-link" onClick={handleNavClick}>
              About
            </Nav.Link>
            <Nav.Link href="#skills" className="nav-link" onClick={handleNavClick}>
              Skills
            </Nav.Link>
            <Nav.Link href="#education" className="nav-link" onClick={handleNavClick}>
              Education
            </Nav.Link>
            <Nav.Link href="#projects" className="nav-link" onClick={handleNavClick}>
              Projects
            </Nav.Link>
            <Nav.Link href="#contactme" className="nav-link" onClick={handleNavClick}>
              Contact
            </Nav.Link>
          </Nav>
        </div>

      </div>
    </nav>
  );
}

export default Navigation;
