// import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
// import menpic from "../../assests/menpic.avif";
// import './About.css'
// function About() {
//   return (
//     <Container>
//       <Row>
//         <Col md={12} xs={12}>
//           <h1
//             className="text-center mt-1 display-6"
//             style={{ textDecoration: "underline" }}
//           >
//             About Me
//           </h1>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={12} xs={12} className="mt-md-3 mt-3 text-center ">
//           <Image
//             src={menpic}
//             roundedCircle
//             style={{ width: "300px", height: "300px" }}
//           />
//         </Col>
//       </Row>

//       <Row>
//         <Col md={2}></Col>
//         <Col md={8} xs={12} className=" mt-4 ">
//           <div className=" justify-content-center ">
//             <p className="lead aboutpara" style={{ textAlign: "justify" }}>
//               Strong in Design and innovative with problem solving skills,
//               passinate about implementing and launching new projects.Ability to
//               translate business requirement into technical solution and as
//               ability of leadership,Teamwork. Looking to start career as an
//               entry-level web development with a latest new technology.
//             </p>
//           </div>
//         </Col>
//         <Col md={2}></Col>
//       </Row>
//     </Container>
//   );
// }

// export default About;

import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import menpic from "../../assests/menpic.avif";
import "./About.css";
import Education from "../Education/Education";

function About() {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setAnimationDone(true);
    }, 100);
  }, []);

  return (
    <>
   
    <Container className={`landing-page ${animationDone ? "animate" : ""}`}>
      <Row className="mt-3">
        <Col md={12} xs={12}>
          <h1
            className="text-center mt-1 display-6"
            style={{ textDecoration: "underline" }}
          >
            About Me
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md={12} xs={12} className="mt-md-3 mt-3 text-center">
          <Image
            src={menpic}
            roundedCircle
            style={{ height: "300px" }}
          />
        </Col>
      </Row>

      <Row>
        <Col md={1}></Col>
        <Col md={10} xs={12} >
          <div className="justify-content-center p-1">
            <p className="lead aboutpara mt-2" style={{ textAlign: "justify" }}>
            I possess a boundless creativity and a knack for innovation, infusing every design with a touch of brilliance. My relentless pursuit of solutions fuels my passion for tackling intricate challenges head-on, turning obstacles into opportunities for groundbreaking achievements. I thrive on the thrill of bringing fresh, cutting-edge projects to fruition, orchestrating their journey from inception to dazzling debut.
            </p>
            <p className="lead aboutpara mt-2" style={{ textAlign: "justify" }}>
            My unique ability to seamlessly meld business acumen with technical finesse enables me to craft bespoke solutions that exceed expectations. A natural leader at heart, I inspire and empower teams to reach new heights, fostering a culture of collaboration and shared success. 
            </p>
            <p className="lead aboutpara mt-2" style={{ textAlign: "justify" }}>
            As I embark on my journey into the dynamic realm of web development, I eagerly embrace the opportunity to harness the power of emerging technologies and shape the digital landscape with ingenuity and flair.
            </p>
          </div>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
    
    </>
  );
}

export default About;

