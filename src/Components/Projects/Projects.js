import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import calander from '../../Images/calander.jpg'
import calculator from '../../Images/calculator.jpg'
import todo from '../../Images/todo.avif'
import shop from '../../Images/shop.avif'
import Image from "react-bootstrap/Image";

function Projects() {
  return (
    <>
     <Container >
        <Row>
        <Col md={12} xs={12}>
          <h1 className="text-center mt-3  display-6" style={{textDecoration:"underline"}}>My Projects</h1>
        </Col>
        </Row>
        <Row>
          <Col md={3} xs={12}>
           <div className='d-flex align-items-center justify-content-center mt-4 pt-3 mt-md-5 pt-md-2 '>
          <Image src={calander} rounded style={{width:"250px", height:"250px"}}/>
          </div>
          <div className="text-center mt-2">
            <h5> Age Calculator </h5>
          </div>
          
          </Col>
           <Col md={3} xs={12}>
           <div className='d-flex align-items-center justify-content-center mt-4 pt-3 mt-md-5 pt-md-2 '>
          <Image src={calculator} rounded style={{width:"250px", height:"250px"}}/>
          </div>
          <div className="text-center mt-2">
            <h5> Calculator </h5>
          </div>
          </Col>
          <Col md={3} xs={12}>
          <div className='d-flex align-items-center justify-content-center mt-4 pt-3 mt-md-5 pt-md-2 '>
          <Image src={todo} rounded style={{width:"250px", height:"250px"}}/>
          </div>
          <div className="text-center mt-2">
            <h5> Todo </h5>
          </div>
          </Col>
          <Col md={3} xs={12}>
          <div className='d-flex align-items-center justify-content-center mt-4 pt-3 mt-md-5 pt-md-2  '>
          <Image src={shop} rounded style={{width:"250px", height:"250px"}}/>
          </div>
          <div className="text-center mt-2">
            <h5> E-commerce </h5>
          </div>
          </Col> 
        </Row>
    </Container>
    </>
  )
}

export default Projects