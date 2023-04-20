import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "./axios";
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';  
import LoginPage from './LoginPage';
import "./css/WelcomePage.css"
import Popup from "reactjs-popup";
export default function Registration() {
    const [component, setComponent]= useState(false);
    const handleClick = ()=>{
        setComponent(true);
    }
    return (
    <div>
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
      <div className="headingImage">
      <Container>
        <Row>
          <h1 style={{color: 'white'}}className="text-center my-5">Welcome to Riti Riwaz</h1>
        </Row>
      </Container>
      <Container>
        <Row>
          <h3 style={{color: 'white'}}className="text-center my-5">Your wedding, your way</h3>
        </Row>
      </Container>
      {
        component ? (<>
            <LoginPage/>
        </>):(<></>)
      }
      </div>


    </div>
  );
}
