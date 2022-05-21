import React from "react";

// ----- components -----
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Path from "./pages/Path";
import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";

// ----- style -----
import "./App.css";

// ----- rendering -----
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Path />
      <Portfolio />
    </div>
  );
}

export default App;
