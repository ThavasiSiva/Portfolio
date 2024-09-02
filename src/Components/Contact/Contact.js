import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import "./Contact.css";

function Contact() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // SweetAlert Toast
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (
      input.firstName === "" ||
      input.lastName === "" ||
      input.email === "" ||
      input.mobileNumber === "" ||
      input.comments === ""
    ) {
      Toast.fire({
        title: "Please fill in all fields",
        icon: "error",
      });
    } else {
      console.log("Details sent successfully");
      Toast.fire({
        title: "Details sent successfully",
        icon: "success",
      });

      // Reset form fields
      setInput({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        comments: "",
      });
    }
  };

  return (
    <>
      <Container className="contact-container mb-2">
        <Row>
          <Col md={12} xs={12} className="contact-form-field">
            <h1
              className="text-center mt-1 display-6"
              style={{ textDecoration: "underline" }}
            >
              Contact Me
            </h1>
          </Col>
        </Row>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={2} xs={12}></Col>

            <Col
              md={4}
              xs={12}
              className="d-flex align-items-center justify-content-center mt-4 contact-form-field"
            >
              <Form.Control
                placeholder="First name"
                className="border border-1 border-primary w-100"
                name="firstName"
                value={input.firstName}
                onChange={handleChange}
                style={{ height: "2.8rem" }}
              />
            </Col>
            <Col
              md={4}
              xs={12}
              className="d-flex align-items-center justify-content-center mt-4 contact-form-field"
            >
              <Form.Control
                placeholder="Last name"
                className="border border-1 border-primary w-100"
                name="lastName"
                value={input.lastName}
                onChange={handleChange}
                style={{ height: "2.8rem" }}
              />
            </Col>
            <Col md={2} xs={12}></Col>
          </Row>
          <Row>
            <Col md={2} xs={12}></Col>
            <Col
              md={4}
              xs={12}
              className="d-flex align-items-center justify-content-center mt-4 contact-form-field"
            >
              <Form.Control
                placeholder="E-mail address"
                className="border border-1 border-primary w-100"
                name="email"
                value={input.email}
                onChange={handleChange}
                style={{ height: "2.8rem" }}
              />
            </Col>
            <Col
              md={4}
              xs={12}
              className="d-flex align-items-center justify-content-center mt-4 contact-form-field"
            >
              <Form.Control
                placeholder="Mobile Number"
                className="border border-1 border-primary w-100"
                name="mobileNumber"
                value={input.mobileNumber}
                onChange={handleChange}
                style={{ height: "2.8rem" }}
              />
            </Col>
            <Col md={2} xs={12}></Col>
          </Row>
          <Row>
            <Col md={2} xs={12}></Col>
            <Col md={8} xs={12}>
              <div className="d-flex align-items-center justify-content-center mt-4 contact-form-field">
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Your Comments"
                  className=" w-100 border border-1 border-primary"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    name="comments"
                    value={input.comments}
                    onChange={handleChange}
                    style={{ height: "12rem" }}
                  />
                </FloatingLabel>
              </div>
            </Col>
            <Col md={2} xs={12}></Col>
          </Row>
          <Row>
            <Col>
              <div className="d-flex align-items-center justify-content-center mt-4 ">
                <Button className="button1" type="submit">Submit</Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default Contact;
