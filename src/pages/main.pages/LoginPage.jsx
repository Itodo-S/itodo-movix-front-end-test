import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets";
import { TextField } from "../../components/Forms";

const LoginPage = () => {
  return (
    <div className="login-page wf-100 hv-100">
      <div className="login-page__form-container">
        <img src={assets.Logo} alt="Band Logo" className="mgb-10" />
        <p className="text-black fw-bold login-page__form-container__title mgt-20">
          Hi, Welcome
        </p>
        <p className="login-page__form-container__sub-title text-accent-dark-100 mgb-10">
          Please sign-in to your account and start your experience
        </p>

        <form className="wf-100">
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
            Login
          </button>
        </form>

        <Link to="/" className="login-page__link">
          Don’t have an account? <span className="">Register</span>
        </Link>
      </div>
    </div>
  );
};

export { LoginPage as default };
