import React from "react";
import { Video } from "../../assets/images";
import "./Community.scss";

const Community = () => {
  return (
    <div className="container-fluid community">
      <div className="community__wrapper text-md-center">
        <h3 className="community__title">What our community is saying?</h3>
        <p className="community__text">A mission-driven company that invest</p>
        <p className="community__text">in and builds healthier living</p>
        <div className="container community__movie">
          <img src={Video} alt="Lady" className="community__movie__image"/>
        </div>
      </div>
    </div>
  );
};

export default Community;
