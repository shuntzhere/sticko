import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Signup = () => {
  document.title = "Sign Up";
  return (
    <section className="form__container">
      <form id="signup-form" className="flex flex-col flex-items-center">
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
          <input type="email" id="email" placeholder="saviour101" required />
        </div>
        <div className="input__form">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            placeholder="sticko@world.com"
            required
          />
        </div>
        <div className="input__form">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="********"
            id="password"
            required
          />
        </div>
        <div className="input__form">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            placeholder="********"
            id="password"
            required
          />
        </div>
        <button className="btn btn-submit" type="submit">
          Sign Up
        </button>
      </form>
    </section>
  );
};
