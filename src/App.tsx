// ----- style -----
import "./App.css";

import React from "react";

// ----- components -----
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Path from "./pages/Path";
import Portfolio from "./pages/Portfolio";

// ----- rendering -----
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Path />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
