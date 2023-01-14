import React from "react";
import { assets } from "../../assets";

const MovieCategories = ({children}) => {
  return (
    <div className="wf-98 d-flex flex-direction-col align-items-center mgt-50">
      <div className="d-flex align-items-center justify-content-between wf-90">
        <p className="fw-bold fs-36">Featured Movie</p>
        <div className="d-flex align-items-center">
        <p className="fs-18 pointer text-rose">Featured Movie</p>
        <img src={assets.Chevron_right} alt="Icon" className="mgl-4 pointer"/>
        </div>
      </div>

      <div className=" wf-100 mgt-35 d-flex justify-content-center align-items-center">
        <img src={assets.left_arrow} alt="" className="mgr-20 pointer"/>
        <div className="wf-90 movie-scroller">
            {children}
        </div>
        <img src={assets.right_arrow} alt="" className="mgl-20 pointer" />
      </div>
    </div>
  );
};

export { MovieCategories as default };
