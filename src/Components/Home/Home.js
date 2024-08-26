
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import my_picture from '../../assests/my_pic.jpg';
import Image from "react-bootstrap/Image";
import resume from "../../assests/resume.pdf";
import './Home.css';

function Home() {
  return (
    <Container>
      <Row>
        <Col md={6} className="mt-md-5 pt-md-4 mt-5 animate-from-left">
          <h1 className="display-5 name homehead">Hi, I'm Siva</h1>
          <h3 className="display-6 mt-2 homerole">Fullstack Developer</h3>
          <p className="lead mt-2 homepara" style={{ textAlign: "justify" }}>
            I am a passionate and experienced MERN (MongoDB, Express.js, React.js, Node.js) stack developer with a deep understanding of web development technologies. My journey in web development began with a keen interest in creating dynamic user-friendly applications.
          </p>
          <Button className="mt-2 button1" xs={12}>
            <a href={resume} download className="homecv" style={{ textDecoration: "none" }}>Download cv</a>
          </Button>
        </Col>
        <Col md={6} xs={12} className="d-flex align-items-center justify-content-center animate-from-right">
          <Image src={my_picture} className="mt-4" roundedCircle style={{ width: "330px" }} />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
