import React from "react";
import { assets } from "../../assets";

const Nav = () => {
  return (
    <div className="nav wf-90 pdy-20">
      <div className="d-flex flex-direction-row justify-content-center align-items-center">
        <img src={assets.tv} alt="Movix Tv Logo" />
        <p className="mgl-15 fs-24 text-white fw-bold">Movix</p>
      </div>

      <div className="wf-40">
        <div className="nav__input wf-100 d-flex align-items-center h-40 pdx-10">
          <input
            className="wf-100 hf-100 text-white"
            type="text"
            placeholder="What do you want to watch?"
          />
          <img
            src={assets.SearchIcon}
            alt="Search Icon"
            className="w-12 h-12 pointer"
          />
        </div>
      </div>

      <div className="d-flex flex-direction-row justify-content-center align-items-center">
        {" "}
        <p className="fs-16 text-white fw-bold">Hi, $Fullname</p>
        <img src={assets.Menu} alt="Movix Tv Logo" className="mgl-15"/>
      </div>
    </div>
  );
};

export { Nav as default };
