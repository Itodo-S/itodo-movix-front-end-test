import React from "react";
import { assets } from "../../assets";

const ExclusiveVideoCard = ({ src, title }) => {
  return (
    <div className="exclusive-video-card wf-31 d-flex flex-direction-col justify-content-center">
      <div className="exclusive-video-card__picture bg-black wf-100">
        <img className="wf-100 hf-100" src={src} alt="" />
        <div className="hf-100 wf-100 exclusive-video-card__overlay">
          <img src={assets.play2} alt="" className="pointer" />
        </div>
      </div>
      <p className="fw-bold fs-18 mgt-15 text-accent">{title}</p>
    </div>
  );
};

export { ExclusiveVideoCard as default };
