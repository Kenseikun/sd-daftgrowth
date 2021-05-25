import React from "react";
import Profit from "./Profit";

import { profitsArray } from "../../helpers/profitsArray";
import "./Profits.scss";

const Profits = () => {
  return (
    <section className="container profits">
      <div className="row">
        <div className="profits__content col-12 col-md-6">
          <h3 className="profits__title">What you’re getting?</h3>
          <p className="profits__text">
            We bring you personalized development programs that are backed by research and crafted from the years of
            experience
          </p>
        </div>

        <div className="col-12">
          <ul className="list-unstyled d-flex flex-column flex-md-row align-items-center justify-content-between">
            {profitsArray.map(({ image, title, text }) => {
              return (
                <li key={title}>
                  <Profit image={image} title={title} text={text} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profits;
