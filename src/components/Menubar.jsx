import React from "react";
import "../styles/menubar.css";

import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Menubar = () => {
  return (
    
    <div className="menubar ">
    
      <h3 className="text1 ">
        Admin Pro <sup>2</sup> <span>&#128512;</span>
      </h3>
      <ul>
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="buttons">Buttons</Link>
        </li>
        <li>
          <Link to="cards">Cards</Link>
        </li>
        <li>
          <Link to="colors">Colors</Link>
        </li>
        <li>
          <Link to="borders">Borders</Link>
        </li>
      </ul>
      
    </div>
   
  );
};
export default Menubar;
