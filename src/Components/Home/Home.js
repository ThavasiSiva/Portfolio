import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import my_picture from "../../assests/my_pic.jpg";
import Image from "react-bootstrap/Image";
import resume from "../../assests/resume.pdf";
import "./Home.css";
import About from "../About/About";

function Home() {
  return (
    <>
      <Container>
        <Row className="align-items-center mt-5 mb-3">
          <Col
            md={6}
            className="mt-md-5 pt-md-4 text-md-start text-center mb-3 animate-from-left"
          >
            <h1 className="display-5 name homehead">Hi, I'm Siva</h1>
            <h3 className="display-6 mt-2 homerole">Fullstack Developer</h3>
            <p className="lead mt-2 homepara">
              I am a passionate and experienced MERN (MongoDB, Express.js,
              React.js, Node.js) stack developer with a deep understanding of
              web development technologies. My journey in web development began
              with a keen interest in creating dynamic user-friendly
              applications.
            </p>
            <Button className="mt-2 button1">
              <a href={resume} download className="homecv text-decoration-none">
                Download CV
              </a>
            </Button>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center mt-4 mt-md-0 mb-3 animate-from-right"
          >
            <Image
              src={my_picture}
              roundedCircle
              className="img-fluid"
              style={{
                maxWidth: "330px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
