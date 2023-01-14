import React from "react";
import { assets } from "../../assets";

const Footer = () => {
  return (
    <div className="h-200 wf-100 mgt-50 d-flex align-items-center flex-direction-col justify-content-center">
      <div className="d-flex align-items-center">
        <img src={assets.fa_brands_facebook_square} alt="Icon"  className="pointer"/>
        <img src={assets.fa_brands_instagram} alt="Icon"  className="mgl-40 pointer"/>
        <img src={assets.fa_brands_twitter} alt="Icon"  className="mgl-40 pointer"/>
        <img src={assets.fa_brands_youtube} alt="Icon"  className="mgl-40 pointer"/>
      </div>

      <div className="d-flex align-items-center text-accent mgt-30">
        <p className="mgl-40 pointer fw-bold fs-18">Conditions of Use</p>
        <p className="mgl-40 pointer fw-bold fs-18">Privacy & Policy</p>
        <p className="mgl-40 pointer fw-bold fs-18">Press Room</p>
      </div>

      <p className="fw-bold fs-18 text-accent-dark-100 mgt-30">© 2021 Movix</p>
    </div>
  );
};

export { Footer as default };
