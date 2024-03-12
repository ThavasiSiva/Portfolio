import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} xs={12}>
            <h1
              className="text-center mt-3 display-6"
              style={{ textDecoration: "underline" }}
            >
              Contact Me
            </h1>
          </Col>
        </Row>
        <Form>
          <Row>
            <Col md={2} xs={12}></Col>

            <Col
              md={4}
              xs={12}
              className="d-flex align-items-center justify-content-center mt-4"
            >
              <Form.Control
                placeholder="First name"
                className="border border-1 border-primary  w-100"
                style={{ height: "2.8rem" }}
              />
            </Col>
            <Col
              md={4}
              xs={12}
              className="d-flex align-items-center justify-content-center mt-4"
            >
              <Form.Control
                placeholder="Last name"
                className="border border-1 border-primary  w-100"
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
              className="d-flex align-items-center justify-content-center mt-4"
            >
              <Form.Control
                placeholder="E-mail address"
                className="border border-1 border-primary  w-100"
                style={{ height: "2.8rem" }}
              />
            </Col>
            <Col
              md={4}
              xs={12}
              className="d-flex align-items-center justify-content-center mt-4"
            >
              <Form.Control
                placeholder="Mobile Number"
                className="border border-1 border-primary  w-100"
                style={{ height: "2.8rem" }}
              />
            </Col>
            <Col md={2} xs={12}></Col>
          </Row>
          <Row>
            <Col md={2} xs={12}></Col>
            <Col md={8} xs={12}>
              <div className="d-flex align-items-center justify-content-center mt-4">
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Your Comments"
                  className=" w-100 border border-1 border-primary"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "12rem" }}
                  />
                </FloatingLabel>
              </div>
            </Col>
            <Col md={2} xs={12}></Col>
          </Row>
          <Row>
            <Col>
              <div className="d-flex align-items-center justify-content-center mt-4">
                <Button variant="primary">Submit</Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default Contact;
