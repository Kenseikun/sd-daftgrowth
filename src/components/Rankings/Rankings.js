import React, { useState } from "react";
import Ranking from "./Ranking";
import { rankingsArray } from "../../helpers/rankingsArray";

const Rankings = () => {
  const [rankings, setRankings] = useState([...rankingsArray]);

  return (
    <section className="container rank">
      <div className="row">
        <div className="col-12 col-md-10 offset-md-1">
          <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-md-between text-center">
            {rankings.map(({ value, text }) => {
              return (
                <li key={value}>
                  <Ranking value={value} text={text} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Rankings;
