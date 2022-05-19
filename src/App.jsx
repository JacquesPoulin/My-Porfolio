import React from "react";

// ----- components -----
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
// import Project from "./pages/Project";
// import Contact from "./pages/Contact";

// ----- style -----
import "./App.css";

// ----- rendering -----
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
