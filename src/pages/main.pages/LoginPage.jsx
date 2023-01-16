import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { assets } from "../../assets";
import { TextField } from "../../components/Forms";
import Spinner from "../../components/Spinner";
import { login, reset } from "../../features/auth/authSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const { email, password } = formData;

  // WATCHES FOR CHANGES IN THE INPUT FIELDS
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // HANDLES THE FORM SUBMITING
  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  // DISPATCHES THE STATE
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/home");
      toast.success("Login successful")
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // LOADER
  if (isLoading) {
    return <Spinner />;
  }
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

        <form className="wf-100" onSubmit={onSubmit}>
          <TextField
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
          <TextField
            type="password"
            placeholder="Passwoard"
            src={assets.eye_close}
            name="password"
            value={password}
            onChange={onChange}
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
