// import { useState, useRef, useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import * as Yup from "yup";

const Form = ({ loginHandle }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const { t } = useTranslation();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email(t("form.errorValidEmail")),
    // .required(t("form.errorRequired")),
  });
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   // console.log('Form submitted:', formData);
  // };

  // const handleEmailChange = e => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = e => {
  //   setPassword(e.target.value);
  // };

  const showPassword = () => {
    setIsPasswordShow(!isPasswordShow);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      // validate={values => {
      //   const errors = {};
      //   if (!values.email) {
      //     errors.email = t("form.errorRequired");
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = t("form.errorValidEmail");
      //   }
      //   return errors;
      // }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        if (values.email === "") {
          //  errors.email = error;
        }
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
        loginHandle();
        setSubmitting(false);
        console.log(values, "on submit");
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className="form" onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="email">
            {t("form.email")}
            <input
              placeholder="example@gmail.com"
              name="email"
              id="email"
              className="form-input"
              type="email"
              autoComplete="email"
              onChange={handleChange}
              // onBlur={handleBlur}
              value={values.email}
              aria-invalid="true"
              aria-errormessage="email-error"
              autoFocus
              //  disabled={disabled || isSubmitting}
              required
            />
            {errors.email && (
              // {errors.email && touched.email && errors.email && (
              <div
                className="error-messages"
                id="email-error"
                aria-live="assertive"
              >
                {/* {errors.email && touched.email && errors.email} */}
                {errors.email && errors.email}
                {/* Enter a valid email address */}
              </div>
            )}
          </label>
          <label className="form-label" htmlFor="password">
            {t("form.password")}
            {/* required */}
            <input
              name="password"
              id="password"
              className="form-input"
              type={isPasswordShow ? "text" : "password"}
              autoComplete="current-password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              // required
            />
            <button
              className="button-show-password"
              type="button"
              aria-label="Show password"
              onClick={showPassword}
            >
              {isPasswordShow ? (
                <div className="eye-icon">⦿</div>
              ) : (
                <div className="eye-icon">˘</div>
              )}
              {/* <div class="eye-icon">⏝⌽⌣⦿◉●</div> */}
            </button>
            {errors.password && touched.password && errors.password}
          </label>
          <button
            className="button button-login"
            // onClick={loginHandle}
            type="submit"
            disabled={isSubmitting}
          >
            <span className="button-text">{t("form.buttonLogin")}</span>
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
