import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "./axios";
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container, Nav, NavDropdown, Row, Col, Button } from 'react-bootstrap';  
import LoginPage from './LoginPage';
import "./css/WelcomePage.css"
import Popup from "reactjs-popup";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Confetti from "./Confetti";
export default function Registration() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,     
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000 // set the time between each slide transition to 3 seconds (3000 milliseconds)
  };
    const [component, setComponent]= useState(false);
    const handleClick = ()=>{
        setComponent(true);
    }
    return (
      <div>
      <Confetti/>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">  
        <Container>  
          <Navbar.Brand href="#home">RitiRiwaz</Navbar.Brand>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">  
              <Nav.Link className = "mx-3" href="#features">Home</Nav.Link>  
              <Nav.Link className = "mx-3" href="#pricing">Blogs</Nav.Link>  
              <Nav.Link className = "mx-3" href="#pricing">Events</Nav.Link>  
              <Nav.Link className = "mx-3" href="#pricing">Contact Us</Nav.Link>  
            </Nav>  
          </Navbar.Collapse>  
        </Container>  
      </Navbar>
    </div>
  );
}
