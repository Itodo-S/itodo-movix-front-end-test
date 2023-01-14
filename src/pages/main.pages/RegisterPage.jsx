import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets";
import { TextField } from "../../components/Forms";

const RegisterPage = () => {
  return (
    <div className="register-page wf-100 hv-100">
      <div className="register-page__form-container">
        <img src={assets.Logo} alt="Band Logo" className="mgb-10" />
        <p className="text-black fw-bold register-page__form-container__title mgt-20">
          Hi, Welcome
        </p>
        <p className="register-page__form-container__sub-title text-accent-dark-100 mgb-10">
          Please sign-up to start your experience
        </p>

        <form className="wf-100">
          <TextField type="text" placeholder="First Name" />
          <TextField type="text" placeholder="Email" />
          <TextField
            type="text"
            placeholder="Passwoard"
            src={assets.eye_close}
          />

          <button
            className="bg-black wf-100 mgt-25 text-white btn"
            type="submit"
          >
            REGISTER
          </button>
        </form>

        <Link to="/login" className="register-page__link">
          Already have an account? <span className="">Login</span>
        </Link>
      </div>
    </div>
  );
};

export { RegisterPage as default };
