import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const fetchUser = () => {
    if (email && password) {
      navigate("/products");
    }
  };
  document.title = " Log In";

  return (
    <section className="form__container">
      <form
        onSubmit={(e) => e.preventDefault()}
        id="login-form"
        className="flex flex-col flex-items-center"
      >
        <h2>Log In</h2>
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input__form">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <a className="forget__password" href="#">
            Forgot Password ?
          </a>
        </div>
        <button
          className="btn btn-submit"
          type="submit"
          onClick={() => fetchUser()}
        >
          Log In
        </button>
      </form>
    </section>
  );
};
