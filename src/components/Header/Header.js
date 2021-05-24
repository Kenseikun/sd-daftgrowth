import React from "react";
import { Hero, Logo } from "../../assets/images";
import "./Header.scss";

const Header = () => {
  return (
    <div className="container header">
      <div className="row d-flex flex-column flex-md-row-reverse">
        <img src={Hero} alt="Girl is reading a book." className="header__image col-12 col-md-8" />

        <div className="header__content col-12 col-md-4 d-flex flex-column align-items-md-start">
          <h1 className="header__content__title">
            Check y
            <span>
              <img src={Logo} alt="Company Logo" className="header__content__logo" />
            </span>
            ur well-being
          </h1>
          <p className="header__content__text">
            We’re sure that deciding to check on your health is a big step, even if it doesn’t bother in any way.{" "}
          </p>
          <button className="header__content__button">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
