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
      <div className={component ? ('addedRegister') : ('headingImage')}>
      <Container>
        <Row>
          <h1 style={{color: 'white'}}className="text-center my-5">Welcome to Riti Riwaz</h1>
        </Row>
      </Container>
      <Container>
        <Row>
          <h3 style={{color: 'white'}}className="text-center my-2">Your wedding, your way</h3>
        </Row>
      </Container>
      <Container>
        <Row>
          <h3 style={{color: 'white'}}className="text-center my-2">Find the best wedding vendors with thousands of trusted reviews</h3>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="text-center">
            {
              component ? (<>
            <Button className="my-3" variant="danger" onClick={()=>{setComponent(false)}}>Close</Button>
              </>) : (<>
            <Button className="my-3" variant="danger" onClick={()=>{setComponent(true)}}>Login/Register</Button>
              </>)
            }
          </Col>
        </Row>
      </Container>
      {
        component ? (<div className="my-1">
            <LoginPage/>
        </div>):(<></>)
      }
      </div>
      {/* <div className='carousel-div'>
        <Slider {...settings}>
          <div style ={{  alignContent: 'center'}}>
            <img style={{width : '50%', height : '20rem', margin : 'auto'}}src='https://wallpaperaccess.com/full/1315478.jpg' alt='carousel image 1' />
          </div>
          <div>
            <img style={{width : '100%'}} src='https://media.licdn.com/dms/image/D5612AQFG2bcxXPj_mg/article-cover_image-shrink_423_752/0/1664975241479?e=1684972800&v=beta&t=l9mwVup6LIzvpGRNHhBuBoN6pzAs_WHxAcK8O8jIlf4' alt='carousel image 2' />
          </div>
          <div>
            <img style={{width : '100%'}} src='https://globisinsights.com/wp-content/uploads/2022/08/How-to-Find-Your-Dream-Job-scaled.jpg' alt='carousel image 3' />
          </div>
        </Slider>
      </div> */}

    </div>
  );
}
