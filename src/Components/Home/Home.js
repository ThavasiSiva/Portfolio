import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import boypic from "../../Images/boypic.jpg";
import Image from "react-bootstrap/Image";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../../Components/Home/Home.css'

function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="mt-md-5 pt-md-4 mt-5 ">
            <h1 className="display-5 ">Hi,I'm Siva</h1>
            <h3 className="display-6 mt-2 ">Fullstack Developer</h3>
            <p
              className="lead mt-2 "
              style={{ textAlign: "justify" }}
            >
              I am a passionate and experienced MERN (MongoDB, Express.js,
              React.js, Node.js) stack developer with a deep understanding of
              web development technologies.My journey in web development began
              with a keen in interest in creating dynamic user-friendly
              applications.
            </p>

            <Button className="mt-2" xs={12}>
              Download cv
            </Button>
          </Col>
          <Col
            md={6}
            xs={12}
            className="d-flex align-items-center justify-content-center"
          >
            <Image
              src={boypic}
              className="mt-4"
              roundedCircle
              style={{ width: "300px", height: "300px" }}
            />
          </Col>
        </Row>
       
            
      
      </Container>
    </>
  );
}

export default Home;
