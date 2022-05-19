import React from "react";

// ----- components -----
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Path from "./pages/Path";
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
    </div>
  );
}

export default App;
