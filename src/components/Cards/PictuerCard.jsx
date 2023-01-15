import React from "react";
import { assets } from "../../assets";

const PictureCard = ({ movieTitle, src, genre }) => {
  return (
    <div className="picture-card wf-100 d-flex flex-direction-col justify-content-center">
      <div className="picture-card__picture bg-black wf-100">
        <img loading="lazy" src={src} alt="" className="wf-100 hf-100" />
        <div className="picture-card__picture__overlay wf-100 hf-100">
          <img
            src={assets.Favorite2}
            alt=""
            className="mgt-20 mgr-20 pointer"
          />
        </div>
      </div>

      <p className="mgt-10 fw-bold fs-12 text-accent-dark-200">
        USA, 2016 - Current
      </p>

      <p className="fw-bold fs-18 mgt-15 text-accent">{movieTitle}</p>

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
      <p className="fw-bold fs-12 mgt-15 text-accent-dark-200">{genre}</p>
    </div>
  );
};

export { PictureCard as default };
