import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
export default function navbar() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/form">
            <li>form</li>
          </Link>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/contact">
            <li>contact</li>
          </Link>
          <Link to="/login">
            <li>login</li>
          </Link>
          <Link to="/sign">
            <li>sign</li>
          </Link>
          <Link to="/Todolist">
            <li>Todolist</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
