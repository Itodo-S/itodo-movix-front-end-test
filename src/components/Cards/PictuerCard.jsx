import React from "react";
import { assets } from "../../assets";

const PictureCard = () => {
  return (
    <div className="picture-card wf-21 d-flex flex-direction-col justify-content-center">
      <div className="picture-card__picture pd-10 bg-black  wf-100"></div>

      <p className="mgt-10 fw-bold fs-12 text-accent-dark-200">
        USA, 2016 - Current
      </p>

      <p className="fw-bold fs-18 mgt-15 text-accent">Stranger Things</p>

      <div className="d-flex justify-content-between align-items-center mgt-10">
        <div className="d-flex align-items-center">
          <img src={assets.imdb} alt="Icon" />
          <p className="fs-12 mgl-10">86.0 / 100</p>
        </div>

        <div className="d-flex align-items-center">
          <img src={assets.cherry} alt="Icon" />
          <p className="fs-12 mgl-10">97%</p>
        </div>
      </div>
      <p className="fw-bold fs-12 mgt-15 text-accent-dark-200">Action, Adventure, Horror</p>
    </div>
  );
};

export { PictureCard as default };
