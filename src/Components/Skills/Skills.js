import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import "boxicons";
import "bootstrap/dist/css/bootstrap.min.css";
import './Skills.css'

function Skills() {
  return (
    <Container>
      <Row>
        <Col md={12} xs={12}>
          <h1 className="text-center mt-1 display-6" style={{ textDecoration: "underline" }}>My Skills</h1>
        </Col>
      </Row>
      <Row>
       
        <Col md={6} xs={12} >
          <div className='mt-4 d-flex align-items-center'>
            <i className="bx bxl-html5"  style={{ color: "#E44D26", fontSize: "2rem" }}></i><span className='skill-text'>HTML</span>
            
          </div>
          <div>
            <ProgressBar animated variant='danger' now={90} style={{ width: '100%'}} className="progress-bar-animation"/>
          </div>
          <div className='mt-1'>90%</div>
          <div className='mt-4 d-flex align-items-center'>
            <i className="bx bxl-css3"  style={{ color: "#214CE5", fontSize: "2rem" }}></i><span className='skill-text'>CSS</span>
            
          </div>
          <div>
            <ProgressBar animated variant="primary" now={85} style={{ width: '100%'}} className="progress-bar-animation"/>
          </div>
          <div className='mt-1'>85%</div>
          <div className='mt-4 d-flex align-items-center'>
            <i className="bx bxl-javascript"  style={{ color: "#F7E018", fontSize: "2rem" }}></i><span className='skill-text'>Javascript</span>
            
          </div>
          <div>
            <ProgressBar animated variant="warning" now={75} style={{ width: '100%'}} className="progress-bar-animation"/>
          </div>
          <div className='mt-1'>75%</div>
          <div className='mt-4 d-flex align-items-center'>
            <i className="bx bxl-react"  style={{ color: "#69BCBC", fontSize: "2rem" }}></i><span className='skill-text'>React</span>
            
          </div>
          <div>
            <ProgressBar animated variant="info" now={80} style={{ width: '100%'}} className="progress-bar-animation"/>
          </div>
          <div className='mt-1'>80%</div>
        </Col>
        <Col md={6} xs={12}>
          <div className='mt-4 d-flex align-items-center'>
            <i className="bx bxl-nodejs"  style={{ color: "#5BAC47", fontSize: "2rem" }}></i><span className='skill-text'>Nodejs</span>
            
          </div>
          <div>
            <ProgressBar animated variant="dark" now={70} style={{ width: '100%'}} className="progress-bar-animation"/>
          </div>
          <div className='mt-1'>70%</div>
          <div className='mt-4 d-flex align-items-center'>
            <i className="bx bxl-mongodb"  style={{ color: "#10AB50", fontSize: "2rem" }}></i><span className='skill-text'>MongoDB</span>
            
          </div>
          <div>
            <ProgressBar animated variant="success" now={80} style={{ width: '100%'}} className="progress-bar-animation"/>
          </div>
          <div className='mt-1'>80%</div>
          <div className='mt-4 d-flex align-items-center'>
            <i className="bx bxl-bootstrap"  style={{ color: "#8A0AFC", fontSize: "2rem" }}></i><span className='skill-text'>Bootstrap</span>
            
          </div>
          <div>
            <ProgressBar animated variant="secondary" now={85} style={{ width: '100%'}} className="progress-bar-animation"/>
          </div>
          <div className='mt-1'>85%</div>
          <div className='mt-4 d-flex align-items-center'>
            <i className="bx bxl-aws"  style={{ color: "#F79400", fontSize: "2rem" }}></i><span className='skill-text'>AWS</span>
            
          </div>
          <div>
            <ProgressBar animated variant="primary" now={70} style={{ width: '100%'}} className="progress-bar-animation"/>
          </div>
          <div className='mt-1 d-flex align-items-center'>70%</div>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Skills;
