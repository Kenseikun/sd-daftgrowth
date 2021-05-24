import React from "react";

import Community from "../components/Community/Community";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Profits from "../components/Profits/Profits";
import Rankings from "../components/Rankings/Rankings";

import "./Root.scss";

const Root = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Rankings />
      <Community />
      <Profits />
      <Footer />
    </div>
  );
};

export default Root;
