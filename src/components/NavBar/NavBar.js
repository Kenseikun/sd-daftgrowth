import React, { useState } from "react";
import { Logo, LogoText } from "../../assets/images";
import "./NavBar.scss";

const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a href="/">
          <img src={Logo} alt="Logo sign" className="navbar__logo" />
          <img src={LogoText} alt="Company name" className="navbar__logo-text" />
        </a>
        <button
          className="custom-toggler navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarsExample09">
          <a className="nav-link text-info" href="/">
            Home
          </a>
          <a className="nav-link text-info" href="/about">
            About
          </a>
          <a className="nav-link text-info" href="/courses">
            Courses
          </a>
          <a className="nav-link text-info" href="/news">
            News
          </a>
          <a className="nav-link text-info" href="/contact">
            Contact
          </a>
          <a className="btn nav-link text-info" href="/login">
            Log in
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
