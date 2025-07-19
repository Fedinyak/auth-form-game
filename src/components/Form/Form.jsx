import { useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "./Input";
import ErrorMessage from "./ErrorMessage";
import Preloader from "../Ui/Preloader";
// import axios from "axios";

const Form = ({
  loginHandle,
  showPreloader,
  hiddenPreloader,
  setErrorMessage,
}) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  // const [isShowloader, setIsShowLoader] = useState(false);

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

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(e, email, password, "e, email, password, handleSubmit");

    if (isFieldEmpty(email)) {
      setEmailError(t("form.errorRequired"));
      console.log("email empty");
      setIsSubmitting(false);
    }
    if (isFieldEmpty(password)) {
      setPasswordError(t("form.errorRequired"));
      setIsSubmitting(false);
      console.log("password empty");
    }
    if (!isFieldEmpty(email) && !isFieldEmpty(password)) {
      console.log("form submitted");
      // const values = { email, password };
      //  setAuthFailed(false);
      showPreloader();
      // timeout for fake preload
      setTimeout(() => {
        try {
          setEmailError("");
          setPasswordError("");
          setIsSubmitting(true);
          setTimeout(() => {
            setIsSubmitting(false);
          }, 2000);
          loginHandle();
          // const response = await axios.post("NONEXISTENT-ENDPOINT_API", values);
          // localStorage.setItem("userId", JSON.stringify(response.data));
        } catch (error) {
          console.error(error);
          // showError(e)
          // setErrorMessage(error);
          setIsSubmitting(false);
          if (error.isAxiosError || error.response.status === 409) {
            console.log(error.response.status, "error.response.status");
            // setAuthFailed(true);
            setErrorMessage(error.response.status);
            return;
          }
          throw error;
        } finally {
          hiddenPreloader();
        }
      }, 1000);
    }
  };

  const handleEmailChange = e => {
    setEmail(e.target.value.trim());
    setEmailError("");
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value.trim());
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
        type="email"
        autoComplete="email"
        inputType="email"
        isAutoFocus={true}
        isInvalid={emailError}
      >
        {emailError && <ErrorMessage error={emailError} type={"email"} />}
      </Input>

      <Input
        value={password}
        onChange={handlePasswordChange}
        onBlur={null}
        placeholder={null}
        type="password"
        autoComplete="current-password"
        inputType={isPasswordShow ? "text" : "password"}
        isAutoFocus={false}
        isInvalid={passwordError}
      >
        <button
          className="button button-show-password"
          type="button"
          aria-label="Show password"
          onClick={showPassword}
        >
          <div className="eye-icon">
            {isPasswordShow ? (
              <>
                <span className="visually-hidden">
                  {t("form.hidePassword")}
                </span>
                <span>o_o</span>
              </>
            ) : (
              <>
                <span className="visually-hidden">
                  {t("form.showPassword")}
                </span>
                <span>-_-</span>
              </>
            )}
          </div>
          {/* <div className="eye-icon">{isPasswordShow ? "°_°" : "˘_˘"}</div> */}
          {/* <div className="eye-icon">{isPasswordShow ? "⦿" : "˘"}</div> */}
          {/* <div class="eye-icon">⏝⌽⌣⦿◉●</div> */}
        </button>
        {passwordError && (
          <ErrorMessage error={passwordError} type={"password"} />
        )}
      </Input>
      <button
        className="button button-login"
        type="submit"
        disabled={emailError || passwordError || isSubmitting}
      >
        {/* <span>{isShowloader && <Preloader />}</span> */}
        <span className="button-text">{t("form.buttonLogin")}</span>
      </button>
      {/* <Preloader /> */}
    </form>
  );
};

export default Form;
