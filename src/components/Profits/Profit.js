import React from "react";

import "./Profit.scss";

const Profit = ({ image, title, text }) => {
  return (
    <div className="profit text-center d-flex flex-column p-4">
      <img src={image} alt="Profit" className="profit__image" />
      <p className="profit__title">{title}</p>
      <p className="profit__text">{text}</p>
    </div>
  );
};

export default Profit;
