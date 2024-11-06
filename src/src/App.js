import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Line from "./Line";
import Home from "./Home";
import ChatGPTBot from "./ChatGPTBot";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="header">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/line">LINE風チャットボット</Link>
            <Link to="/chatgpt">ChatGPT風ボット</Link>
          </nav>
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/line" element={<Line />} />
            <Route path="/chatgpt" element={<ChatGPTBot />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
