import React from "react";
import { LogoWhite } from "../../assets/images";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer container-fluid">
      <div className="container">
        <a href="/">
          <img src={LogoWhite} alt="Logo sign" className="footer__logo" />
        </a>

        <div className="row d-flex flex-md-row-reverse">
          <div className="col-12 col-md-6">
            <div className="footer__input__wrapper">
              <p>Try Medi for free</p>
              <form action="submit">
                <input type="text" placeholder="Enter your email" />
                <button type="submit">Get started</button>
              </form>
            </div>
          </div>

          <div className="col-12 col-md-6 footer__text d-flex justify-content-between ">
            <div className="d-flex flex-column">
              <p>Product</p>
              <a href="/">Updates</a>
              <a href="/">Security</a>
              <a href="/">Chrome Extension</a>
            </div>

            <div className="d-flex flex-column">
              <p>Company</p>
              <a href="/">About</a>
              <a href="/">Blog</a>
              <a href="/">Join Us</a>
            </div>

            <div className="d-flex flex-column">
              <p>Help</p>
              <a href="/">Talk to Support</a>
              <a href="/">Support Docs</a>
              <a href="/">API Docs</a>
              <a href="/">System Status</a>
            </div>
          </div>

          <div className="footer__terms d-none d-md-flex justify-content-end">
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
