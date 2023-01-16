import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { assets } from "../../assets";
import { TextField } from "../../components/Forms";
import Spinner from "../../components/Spinner";
import { register, reset } from "../../features/auth/authSlice";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  // HANDLES SHOWING AND HIDING OF PASSWORD
  const handleShowPassword = () => setShowPassword(!showPassword);

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
      name,
      email,
      password,
    };

    dispatch(register(userData));
  };

  // DISPATCHES THE STATE
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/home");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // LOADER
  if (isLoading) {
    return <Spinner />;
  }
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

        <form className="wf-100" onSubmit={onSubmit}>
          <TextField
            type="text"
            placeholder="First Name"
            onChange={onChange}
            name="name"
            value={name}
          />
          <TextField
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
          <TextField
            placeholder="Passwoard"
            name="password"
            type={showPassword ? "text" : "password"}
            src={!showPassword ? assets.eye_close : assets.eye_open}
            value={password}
            onChange={onChange}
            handleShowPassword={handleShowPassword}
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
