import React from "react";
// import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import MobileHeader from "../../Header/mobileHeader";

const Home = () => {
  return (
    <div className="mainContentContainer">
      <Header />
      <MobileHeader />
    </div>
  );
};

export default Home;
