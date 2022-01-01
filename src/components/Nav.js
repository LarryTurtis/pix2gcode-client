/* eslint-disable import/no-anonymous-default-export */
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Instructions from "./Instructions";
import Home from "./Home";
import About from "./About";
import "../css/App.css";

export default (props) => (
  <div className="App">
    <header className="App-header">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </header>
  </div>
);
