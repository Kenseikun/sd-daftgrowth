import React from "react";
import "./Rankings.scss"

const Ranking = ({value, text}) => {
  return (
    <>
      <p className="ranking__value">{value}</p>
      <p className="ranking__text">{text}</p>
    </>
  );
};

export default Ranking;
