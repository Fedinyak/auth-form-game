// import { useState, useRef, useEffect } from "react";
import Cube from "./Cube";

const FormComponent = ({ loginHandle }) => {
  const handleSubmit = e => {
    e.preventDefault();
    // console.log('Form submitted:', formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Email: <input type="email" autocomplete="username" />
      </label>
      <label>
        Password: <input type="password" autocomplete="current-password" />
      </label>
      <button className="button-login" onClick={loginHandle}>
        Sign Up
      </button>
    </form>
  );
};

export default FormComponent;
