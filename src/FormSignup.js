import React from "react";

const FormSignup = () => {
  return (
    <div className="form-content-right">
      <form className="form">
        <h1>Join Us!</h1>
        <div className="form-input">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            className="form-input"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-input">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-input">
          <label htmlFor="passwort" className="form-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="text"
            className="form-input"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-input">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            id="password2"
            name="password2"
            type="password2"
            className="form-input"
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit" className="form-input-btn">
          I want to join!
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
