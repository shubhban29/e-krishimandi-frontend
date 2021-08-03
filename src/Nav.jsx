import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
const navstyle = {
  color: "white",
};
class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <h3>Krishi Mandi</h3>
          <ul className="nav-links">
            <Link to="/" style={navstyle}>
              <li className="liststyle">Home</li>
            </Link>
            <Link to="/about-us" style={navstyle}>
              <li className="liststyle">About Us</li>
            </Link>
            <Link to="/login" style={navstyle}>
              <li className="liststyle">Login</li>
            </Link>
            <Link to="/signUp" style={navstyle}>
              <li className="liststyle">Register</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
