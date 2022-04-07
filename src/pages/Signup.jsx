import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [msg, setMsg] = useState(false);
  const [type, setType] = useState("password");
  const [confirmtype, setConfirmType] = useState("password");
  const [signup, setSignup] = useState({
    username: "",
    email: "",
    password: "",
    confirmpass: "",
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    const value = e.target.value;
    setSignup({
      ...signup,
      [e.target.name]: value,
    });
  };

  const clickHandler = () => {
    const { email, password, username, confirmpass } = signup;
    if (email && password && username && confirmpass) {
      if (password === confirmpass) {
        navigate("/products");
      } else {
        setMsg(true);
      }
    }
  };

  const showPass = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const showConfirmPass = () => {
    if (confirmtype === "password") {
      setConfirmType("text");
    } else {
      setConfirmType("password");
    }
  };
  document.title = "Sign Up";
  return (
    <section className="form__container">
      <form
        onSubmit={(e) => e.preventDefault()}
        id="signup-form"
        className="flex flex-col flex-items-center"
      >
        <h2>Sign Up</h2>
        <p>with</p>
        <div>
          <button className="fab-btn">
            <GoogleIcon style={{ color: "white" }} />
          </button>
          <button className="fab-btn">
            <FacebookIcon style={{ color: "white" }} />
          </button>
          <button className="fab-btn">
            <TwitterIcon style={{ color: "white" }} />
          </button>
        </div>
        <p>or</p>
        <div className="input__form">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="text"
            defaultValue={signup.username}
            onChange={changeHandler}
            placeholder="saviour101"
            required
          />
        </div>
        <div className="input__form">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            defaultValue={signup.email}
            onChange={changeHandler}
            placeholder="sticko@world.com"
            required
          />
        </div>
        <div className="input__form">
          <label htmlFor="password">Password</label>
          <span
            onClick={showPass}
            style={{ cursor: "pointer", marginLeft: "10rem" }}
          >
            show
          </span>
          <input
            type={type}
            placeholder="********"
            defaultValue={signup.password}
            onChange={changeHandler}
            id="password"
            required
          />
        </div>
        <div className="input__form">
          <label htmlFor="password">Confirm Password</label>
          <span
            onClick={showConfirmPass}
            style={{ cursor: "pointer", marginLeft: "6rem" }}
          >
            show
          </span>
          <input
            type={confirmtype}
            placeholder="********"
            defaultValue={signup.confirmpass}
            onChange={changeHandler}
            id="password"
            required
          />
        </div>
        <button onClick={clickHandler} className="btn btn-submit" type="submit">
          Sign Up
        </button>
      </form>
    </section>
  );
};
