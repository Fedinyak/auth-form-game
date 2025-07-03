// import { useState, useRef, useEffect } from "react";

const Form = ({ loginHandle }) => {
  const handleSubmit = e => {
    e.preventDefault();
    // console.log('Form submitted:', formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Email: <input type="email" autoComplete="username" />
      </label>
      <label>
        Password: <input type="password" autoComplete="current-password" />
      </label>
      <button className="button-login" onClick={loginHandle}>
        Sign Up
      </button>
    </form>
  );
};

export default Form;
