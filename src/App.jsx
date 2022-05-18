import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

// ----- components -----
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

// ----- style -----
import "./App.css";

// ----- rendering -----
function App() {
  return (
    <div className="h-screen bg-no-repeat bg-center bg-slate-900">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/accueil" element={<Home />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/projets" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
