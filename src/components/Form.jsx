// import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Form = ({ loginHandle }) => {
  const { t } = useTranslation();

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('Form submitted:', formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        {t("form.email")}
        {/* <input type="email" autoComplete="username" required /> */}
        <input className="form-input" type="email" autoComplete="username" />
      </label>
      <label>
        {t("form.password")}
        <input
          className="form-input"
          type="password"
          autoComplete="current-password"
        />
        {/* <input type="password" autoComplete="current-password" required /> */}
      </label>
      <button className="button button-login" onClick={loginHandle}>
        <span className="button-text">{t("form.buttonLogin")}</span>
      </button>
    </form>
  );
};

export default Form;
