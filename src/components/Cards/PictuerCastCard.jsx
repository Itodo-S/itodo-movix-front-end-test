import React from "react";

const PictuerCastCard = ({ movieTitle, src }) => {
  return (
    <div className="picture-card wf-100 d-flex flex-direction-col justify-content-center">
      <div className="picture-card__picture bg-black  wf-100">
        <img src={src} alt="" className="wf-100 hf-100" />
      </div>
      <p className="fw-bold fs-18 mgt-15 text-accent">{movieTitle}</p>
    </div>
  );
};

export { PictuerCastCard as default };
