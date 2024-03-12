import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import menpic from "../../Images/menpic.avif";

function About() {
  return (
    <Container>
      <Row>
        <Col md={12} xs={12}>
          <h1 className="text-center mt-3 display-6" style={{textDecoration:"underline"}}>About Me</h1>
        </Col>
      </Row>
      <Row>
        
        <Col md={6} xs={12} className=" mt-md-5 mt-4" >
          <Image
            src={menpic}
            roundedCircle
            style={{ width: "300px", height: "300px"}}
          />
        </Col>
        <Col md={6} xs={12} className="mt-md-5 p-md-3 mt-4 ">
          <p
            className="lead "
            style={{ textAlign: "justify"}}
          >
            Strong in Design and innovative with problem solving skills,
            passinate about implementing and launching new projects.
            <p
              className="lead "
              style={{ textAlign: "justify", marginTop: "1rem" }}
            >
              Ability to translate business requirement into technical solution
              and as ability of leadership,Teamwork.
            </p>
          </p>

          <p
            className="lead "
            style={{ textAlign: "justify", marginTop: "1rem" }}
          >
            Looking to start career as an entry-level web development with a
            latest new technology.
          </p>
        </Col>
       
      </Row>
    </Container>
  );
}

export default About;
