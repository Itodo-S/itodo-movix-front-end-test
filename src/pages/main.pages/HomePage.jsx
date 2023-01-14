import React from "react";
import { assets } from "../../assets";
import Nav from "../../components/Navigation/Nav";

const HomePage = () => {
  return (
    <div className="homepage">
      <div
        className="homepage__hero-bg"
        style={{ backgroundImage: `url(${assets.Poster})` }}
      >
        <Nav />
      </div>
    </div>
  );
};

export { HomePage as default };
