import React from "react";
import { Logo, LogoWhite } from "../../assets/images";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer container-fluid">
      <div className="container">
        <a href="/">
          <img src={Logo} alt="Logo sign" className="navbar__logo" />
          <img src={LogoWhite} alt="Company name" className="navbar__logo-text" />
        </a>

        <div className="row">
          <div className="col-12 col-md-6">
            <div className="footer__input">
              <p>Try Medi for free</p>
              <form action="submit">
                <input type="text" />
                <button type="submit">Get started</button>
              </form>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div>
              <p>Product</p>
              <a href="/">Updates</a>
              <a href="/">Security</a>
              <a href="/">Chrome Extension</a>
            </div>

            <div>
              <p>Company</p>
              <a href="/">About</a>
              <a href="/">Blog</a>
              <a href="/">Join Us</a>
            </div>

            <div>
              <p>Help</p>
              <a href="/">Talk to Support</a>
              <a href="/">Support Docs</a>
              <a href="/">API Docs</a>
              <a href="/">System Status</a>
            </div>

            <div className="display-none d-md-flex justify-content-end">
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
