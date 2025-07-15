import classNames from "classnames";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Input = ({
  children,
  type,
  value,
  onChange,
  onBlur,
  placeholder,
  autoComplete,
  fieldType,
  isAutoFocus,
  isInvalid,
}) => {
  const { t } = useTranslation();

  const inputStyle = classNames("form-input", {
    "form-input-error": !!isInvalid,
  });

  return (
    <label className={`${fieldType}-label`} htmlFor={fieldType}>
      {t(`form.${fieldType}`)}
      <input
        placeholder={placeholder}
        name={fieldType}
        id={fieldType}
        className={inputStyle}
        type={type}
        autoComplete={autoComplete}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        aria-invalid="true"
        aria-errormessage={`${fieldType}-error`}
        autoFocus={isAutoFocus}
      />
      {children}
    </label>
  );
};

const ErrorMessage = ({ error, fieldType }) => {
  return (
    <div
      className="error-messages"
      id={`${fieldType}-error`}
      aria-live="assertive"
    >
      {error}
    </div>
  );
};

const Form = ({ loginHandle }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const { t } = useTranslation();

  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const validateEmail = e => {
    if (e.target.value !== "" && !e.target.value.match(emailRegex)) {
      setEmailError(t("form.errorValidEmail"));
      console.log("error email");
      return;
    }
    setEmailError("");
  };

  const isFieldEmpty = str => {
    if (str === "") {
      console.log("empty field");
      return true;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (isFieldEmpty(email)) {
      setEmailError(t("form.errorRequired"));
      console.log("email empty");
    }
    if (isFieldEmpty(password)) {
      setPasswordError(t("form.errorRequired"));
      console.log("password empty");
    }
    if (!isFieldEmpty(email) && !isFieldEmpty(password)) {
      console.log("form submitted");
      setEmailError("");
      setPasswordError("");
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
      loginHandle();
    }
    // console.log('Form submitted:', formData);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
    setEmailError("");
    // if (emailError) {
    //   validateEmail(e);
    // }
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const showPassword = () => {
    setIsPasswordShow(!isPasswordShow);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        value={email}
        onChange={handleEmailChange}
        onBlur={validateEmail}
        placeholder="example@gmail.com"
        fieldType="email"
        autoComplete="email"
        type="email"
        isAutoFocus={true}
        isInvalid={emailError}
      >
        {emailError && <ErrorMessage error={emailError} fieldType={"email"} />}
      </Input>

      {/* <label className="form-label" htmlFor="email">
        {t("form.email")}
        <input
          placeholder="example@gmail.com"
          name="email"
          id="email"
          className="form-input"
          type="email"
          autoComplete="email"
          onChange={handleEmailChange}
          onBlur={validateEmail}
          value={email}
          aria-invalid="true"
          aria-errormessage="email-error"
          autoFocus
          // required
        /> */}
      {/* {emailError && (
          <div
            className="error-messages"
            id="email-error"
            aria-live="assertive"
          >
            {emailError}
          </div>
        )} */}
      {/* {emailError && <ErrorMessage error={emailError} fieldType={"email"} />}
      </label> */}
      <Input
        value={password}
        onChange={handlePasswordChange}
        onBlur={null}
        placeholder={null}
        fieldType="password"
        autoComplete="current-password"
        type={isPasswordShow ? "text" : "password"}
        isAutoFocus={false}
        isInvalid={passwordError}
      >
        <button
          className="button button-show-password"
          type="button"
          aria-label="Show password"
          onClick={showPassword}
        >
          <div className="eye-icon">{isPasswordShow ? "o_o" : "-_-"}</div>
          {/* <div className="eye-icon">{isPasswordShow ? "°_°" : "˘_˘"}</div> */}
          {/* <div className="eye-icon">{isPasswordShow ? "⦿" : "˘"}</div> */}
          {/* {isPasswordShow ? (
            <div className="eye-icon">⦿</div>
          ) : (
            <div className="eye-icon">˘</div>
          )} */}
          {/* <div class="eye-icon">⏝⌽⌣⦿◉●</div> */}
        </button>
        {passwordError && (
          <ErrorMessage error={passwordError} fieldType={"password"} />
        )}
      </Input>
      {/* <label className="form-label" htmlFor="password">
        {t("form.password")}
        <input
          name="password"
          id="password"
          className="form-input"
          type={isPasswordShow ? "text" : "password"}
          autoComplete="current-password"
          onChange={handlePasswordChange}
          value={password}
          aria-invalid="true"
          aria-errormessage="password-error"
          // required
        />
        <button
          className="button-show-password"
          type="button"
          aria-label="Show password"
          onClick={showPassword}
        > */}
      {/* <div className="eye-icon">{isPasswordShow ? "⦿" : "˘"}</div> */}
      {/* {isPasswordShow ? (
            <div className="eye-icon">⦿</div>
          ) : (
            <div className="eye-icon">˘</div>
          )} */}
      {/* <div class="eye-icon">⏝⌽⌣⦿◉●</div> */}
      {/* </button> */}
      {/* {passwordError && (
          <ErrorMessage error={passwordError} fieldType={"password"} />
        )} */}
      {/* {passwordError && (
          <div className="error-messages" id="password" aria-live="assertive">
            {passwordError}
          </div>
        )} */}
      {/* </label> */}
      <button
        className="button button-login"
        // onClick={loginHandle}
        type="submit"
        disabled={emailError || passwordError || isSubmitting}
      >
        <span className="button-text">{t("form.buttonLogin")}</span>
      </button>
    </form>
  );
};

export default Form;
