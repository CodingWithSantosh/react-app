import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container-fluid topHeader">
        <div className="container py-2 d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/" className="nav-link text-light">
              sk<span className="logoDot">.</span>dev
            </Link>
          </div>
          <ul className="navList d-flex text-light mb-0">
            <li className="nav-item">
              <Link to="/" className="nav-link links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link links">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link links">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link links">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link links">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
