import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import calander from '../../assests/calander.jpg';
import calculator from '../../assests/calculator.jpg';
import todo from '../../assests/todo.avif';
import '../../Components/Projects/Project.css';

function Projects() {
  return (
    <Container className="container">
      <Row>
        <Col>
          <h1 className="text-center mt-1 display-6" style={{ textDecoration: 'underline' }}>My Projects</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-around project-row">
        <Col md={4} xs={12} className="d-flex flex-column align-items-center mt-4 pt-3 mt-md-5 pt-md-2 project">
          <Image src={calander} rounded style={{ width: '250px', height: '250px' }} />
          <div className="text-center mt-2">
            <a href="https://ageanalyzer.netlify.app" className="project_link" target="_blank" rel="noopener noreferrer">Age Calculator</a>
          </div>
        </Col>
        <Col md={4} xs={12} className="d-flex flex-column align-items-center mt-4 pt-3 mt-md-5 pt-md-2 project">
          <Image src={calculator} rounded style={{ width: '250px', height: '250px' }} />
          <div className="text-center mt-2">
            <a href="https://mathevaluator.netlify.app" className="project_link" target="_blank" rel="noopener noreferrer">Calculator</a>
          </div>
        </Col>
        <Col md={4} xs={12} className="d-flex flex-column align-items-center mt-4 pt-3 mt-md-5 pt-md-2 project">
          <Image src={todo} rounded style={{ width: '250px', height: '250px' }} />
          <div className="text-center mt-2">
            <a href="https://todosheet.netlify.app" className="project_link" target="_blank" rel="noopener noreferrer">Todo</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
