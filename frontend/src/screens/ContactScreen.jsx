import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Header from "../components/Header";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/d9abb490-9203-11ee-9fc3-0f51c88dc991";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((response) => {
        response.json();
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (submitted) {
    navigate("/thankyou");
  }

  return (
    <>
      <Header />
      <Container className="text-center py-4">
        <Row>
          <Col>
            {/* <Button variant="secondary" onClick={() => setSubmitted(true)}>
              Test Thank You Message
            </Button> */}
            <h1>Contact</h1>
            <p>
              Feel free to contact us with any questions or comments using the
              form, or by any of the methods listed below.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <strong>Phone:</strong> (202) 709-7982
            </p>
            <p>
              <strong>Email: </strong>
              <a href="info@redsrunaround.com">info@RedsRunaround.com</a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
