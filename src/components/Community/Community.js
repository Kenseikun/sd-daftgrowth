import React from "react";
import YouTube from "react-youtube-embed";
import "./Community.scss";

const Community = () => {
  return (
    <div className="container-fluid community">
      <div className="community__wrapper text-md-center">
        <h3 className="community__title">What our community is saying?</h3>
        <p className="community__text">A mission-driven company that invest in and builds healthier living</p>
        <div className="container community__movie">
          <YouTube id="AgpWX18dby4" />
        </div>
      </div>
    </div>
  );
};

export default Community;
