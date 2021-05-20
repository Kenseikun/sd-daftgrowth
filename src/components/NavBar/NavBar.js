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
          <img src={Logo} alt="Logo sign" />
          <img src={LogoText} alt="Company name" />
        </a>
        <button
          className="custom-toggler navbar-toggler"
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
          <a className="nav-link text-info" href="/contact">
            Support
          </a>
          <a className="nav-link text-info" href="/login">
            Login
          </a>
          <a href="/request-demo" className="btn btn-sm btn-info nav-link text-white">
            Request demo
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
