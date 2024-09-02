import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import sboy from '../../assests/sboy.jpg';
import schoolboy from "../../assests/schoolboy.avif";
import tallboy from '../../assests/tallboy.avif';
import './Education.css';
import Projects from "../Projects/Projects";

function Education() {
  return (
    <>
      <Container fluid className="mb-3">
        <Row>
          <Col md={12} xs={12}>
            <h1 className="text-center mt-1 display-5" style={{ textDecoration: "underline" }}>
              Education
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={4} xs={12} className="d-flex align-items-center justify-content-center mt-3">
            <Card style={{ width: "18rem" }} className="cardin">
              <Card.Img variant="top" src={sboy} />
              <Card.Body>
                <Card.Title>2016 - 2017</Card.Title>
                <h6>SSLC-92.8%</h6>
                <Card.Text className="edupara">
                  RCHSS, Higher Secondary School-Pudukkottai
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xs={12} className="d-flex align-items-center justify-content-center mt-3">
            <Card style={{ width: "18rem" }} className="cardin">
              <Card.Img variant="top" src={schoolboy} />
              <Card.Body>
                <Card.Title>2018 - 2019</Card.Title>
                <h6>HSC-72.1%</h6>
                <Card.Text className="edupara">
                  RCHSS, Higher Secondary School-Pudukkottai
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xs={12} className="d-flex align-items-center justify-content-center mt-3">
            <Card style={{ width: "18rem" }} className="cardin">
              <Card.Img variant="top" src={tallboy} />
              <Card.Body>
                <Card.Title>2019 - 2023</Card.Title>
                <h6>8.02CGPA</h6>
                <Card.Text className="edupara">
                  Suguna College Of Engineering-Coimbatore
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default Education;
