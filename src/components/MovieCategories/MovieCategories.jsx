import React from "react";
import Masonry from "react-masonry-css";
import { assets } from "../../assets";

const MovieCategories = ({
  children,
  title,
  option,
  handleNext,
  handlePrev,
}) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="wf-98 d-flex flex-direction-col align-items-center mgt-50">
      <div className="d-flex align-items-center justify-content-between wf-90">
        <p className="fw-bold fs-36">{title}</p>
        <div className="d-flex align-items-center">
          <p className="fs-18 pointer text-rose">{option}</p>
          <img
            src={assets.Chevron_right}
            alt="Icon"
            className="mgl-4 pointer"
          />
        </div>
      </div>

      <div className=" wf-100 mgt-35 d-flex justify-content-center align-items-center">
        <img
          src={assets.left_arrow}
          alt=""
          className="mgr-20 pointer"
          onClick={handlePrev}
        />
        <div className="wf-90">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {children}
          </Masonry>
        </div>
        <img
          src={assets.right_arrow}
          alt=""
          className="mgl-20 pointer"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export { MovieCategories as default };
