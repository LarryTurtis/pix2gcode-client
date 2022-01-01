/* eslint-disable import/no-anonymous-default-export */
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "../css/App.css";

export default (props) => (
  <div className="App">
    <header className="App-header">
      <Link to="/">
        <p className="main">PX2GC</p>
      </Link>
      <nav>
        <p>convert pixel sprites to gcode</p>
        <Link to="/about">About</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </header>
  </div>
);
