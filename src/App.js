import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import './App.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
