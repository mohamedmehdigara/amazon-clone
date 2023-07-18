import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Home />} />

          {/* Route for the "Header" component */}
          <Route path="/header" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
