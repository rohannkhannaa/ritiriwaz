import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "./axios";
import "./css/LoginPage.css"
export default function Registration() {
  const [renderLogin, setRenderLogin] = useState(true);
  const handleSignUp = () => {
    setRenderLogin(false);
  };
  const handleLogin = () => {
    setRenderLogin(true);
  };
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [registerForm, setRegisterForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phone: "",
    location: "",
    date: "",
    usertype: "bride",
  });
  const handleRegisterInputChange = (event) => {
    event.preventDefault();
    if (event.target.id === "date") {
      console.log("here");
      let date = new Date(Date.parse(event.target.value));

      if (date < new Date()) {
        event.target.setCustomValidity("Please select a date in the future.");
      } else {
        setRegisterForm({
          ...registerForm,
          [event.target.id]: event.target.value,
        });
        event.target.setCustomValidity("");
      }
    } else if (event.target.id === "phone") {
      if (event.target.value.length != 10) {
        event.target.setCustomValidity(
          "Phone number should be 10 digit number."
        );
      } else {
        setRegisterForm({
          ...registerForm,
          [event.target.id]: event.target.value,
        });
        event.target.setCustomValidity("");
      }
    } else {
      setRegisterForm({
        ...registerForm,
        [event.target.id]: event.target.value,
      });
    }
  };
  const handleLoginInputChange = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    console.log(event.target.value);
    setLoginForm({ ...loginForm, [event.target.id]: event.target.value });
  };
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log(loginForm);
    // Set loginForm to backend now
    axios.post("/login", {loginForm}).
    then((response)=>{
      if (response.data.status === 200) {
        alert("You are successfully logged in.");
      } else {
        setMessage(response.data.message);
        // alert("Please try again in a moment");
      }
    })
  };
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    console.log(registerForm);
    // Set loginForm to backend now
    axios.post("/register", {registerForm}).
    then((response)=>{
      if (response.data.status === 200) {
        alert("You are successfully registered.");
      } else {
        alert("Please try again in a moment");
      }
    })
    window.location.reload('/welcome')
  };
  return (
    <div className="bgHandler">
      {renderLogin ? (
        <>
          <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
              <Col md={8} lg={6} xs={12}>
                <div className="border border-2 border-danger"></div>
                <Card className="shadow px-4">
                  <Card.Body>
                    <div className="mb-3 mt-md-4">
                      <h2 className="fw-bold mb-2 text-center text-uppercase ">
                        Riti Riwaz
                      </h2>
                      <hr />
                      <div className="mb-3">
                        <Form onSubmit={handleLoginSubmit}>
                          <Form.Group className="mb-3" controlId="email">
                            <FloatingLabel
                              controlId="email"
                              label="Email address"
                              className="mb-3"
                            >
                              <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                onChange={handleLoginInputChange}
                              />
                            </FloatingLabel>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="password">
                            <FloatingLabel
                              controlId="password"
                              label="Password"
                              className="mb-3"
                            >
                              <Form.Control
                                type="password"
                                placeholder="***"
                                onChange={handleLoginInputChange}
                              />
                            </FloatingLabel>
                          </Form.Group>
                          <p>{message}</p>
                          <div className="d-grid">
                            <Button variant="danger" type="submit">
                              Login
                            </Button>
                          </div>
                        </Form>
                        <div className="mt-3">
                          <p className="mb-0  text-center">
                            Dont have an account??{" "}
                            <button
                              style={{
                                border: "none",
                                backgroundColor: "white",
                                textDecoration: "underline",
                              }}
                              onClick={handleSignUp}
                              className="text-danger fw-bold"
                            >
                              Register here
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
              <Col md={8} lg={6} xs={12}>
                <div className="border border-2 border-danger"></div>
                <Card className="shadow px-4">
                  <Card.Body>
                    <div className="mb-3 mt-md-4">
                      <h2 className="fw-bold mb-2 text-center text-uppercase ">
                        Riti Riwaz
                      </h2>
                      <hr />
                      <div className="mb-3">
                        <Form onSubmit={handleRegisterSubmit}>
                          <Row>
                            <Col>
                              <Form.Group className="mb-3" controlId="fname">
                                <FloatingLabel
                                  controlId="fname"
                                  label="First Name"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    type="text"
                                    placeholder="first-name"
                                    onChange={handleRegisterInputChange}
                                    required
                                  />
                                </FloatingLabel>
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group className="mb-3" controlId="lname">
                                <FloatingLabel
                                  controlId="lname"
                                  label="Last Name"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    type="lname"
                                    placeholder="last-name"
                                    onChange={handleRegisterInputChange}
                                  />
                                </FloatingLabel>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Form.Group className="mb-3" controlId="email">
                            <FloatingLabel
                              controlId="email"
                              label="Email address"
                              className="mb-3"
                            >
                              <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                onChange={handleRegisterInputChange}
                                required
                              />
                            </FloatingLabel>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="phone">
                            <FloatingLabel
                              controlId="phone"
                              label="Phone Number"
                              className="mb-3"
                            >
                              <Form.Control
                                type="text"
                                pattern="[\d]{10}"
                                placeholder="phone-value"
                                onChange={handleRegisterInputChange}
                                required
                             />
                            </FloatingLabel>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="usertype">
                            <FloatingLabel
                              controlId="usertype"
                              label="Select option"
                            >
                              <Form.Select
                                aria-label="Floating label select example"
                                onChange={handleRegisterInputChange}
                                required
                                defaultValue="bride"
                              >
                                <option value="bride">Bride</option>
                                <option value="groom">Groom</option>
                                <option value="other">Other</option>
                              </Form.Select>
                            </FloatingLabel>
                          </Form.Group>

                          <Row>
                            <Col>
                              <Form.Group className="mb-3" controlId="location">
                                <FloatingLabel
                                  controlId="location"
                                  label="Wedding Location"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    type="text"
                                    placeholder="location"
                                    onChange={handleRegisterInputChange}
                                    required
                                 />
                                </FloatingLabel>
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group className="mb-3" controlId="date">
                                <FloatingLabel
                                  controlId="date"
                                  label="Wedding Date"
                                  className="mb-3"
                                >
                                  <Form.Control
                                    type="date"
                                    name="datepic"
                                    placeholder="DateRange"
                                    onChange={handleRegisterInputChange}
                                    required
                                  />
                                </FloatingLabel>
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className="mb-3" controlId="password">
                            <FloatingLabel
                              controlId="password"
                              label="Password"
                              className="mb-3"
                            >
                              <Form.Control
                                type="password"
                                placeholder="***"
                                onChange={handleRegisterInputChange}
                                required
                              />
                            </FloatingLabel>
                          </Form.Group>

                          <div className="d-grid">
                            <Button variant="danger" type="submit">
                              Register
                            </Button>
                          </div>
                        </Form>
                        <div className="mt-3">
                          <p className="mb-0  text-center">
                            Already have an account??{" "}
                            <button
                              style={{
                                color: "red",
                                border: "none",
                                backgroundColor: "white",
                                textDecoration: "underline",
                              }}
                              onClick={handleLogin}
                              className="danger "
                            >
                              Sign in
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
}
