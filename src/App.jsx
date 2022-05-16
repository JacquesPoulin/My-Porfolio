import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />

        <Routes>
          <Route path="*" element={<Landing />} />
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/myskills" element={<Skill />} />
          <Route path="/myprojects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
