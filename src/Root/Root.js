import React from "react";

import Community from "../components/Community/Community";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Rankings from "../components/Rankings/Rankings";

import "./Root.scss";

const Root = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Rankings />
      <Community />
    </div>
  );
};

export default Root;
