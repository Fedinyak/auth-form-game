import classNames from "classnames";
import { useTranslation } from "react-i18next";

const Input = ({
  children,
  inputType,
  value,
  onChange,
  onBlur,
  placeholder,
  autoComplete,
  type,
  isAutoFocus,
  isInvalid,
}) => {
  const { t } = useTranslation();

  const inputStyle = classNames("form-input", {
    "form-input-error": !!isInvalid,
  });

  return (
    <label className={`${type}-label`} htmlFor={type}>
      {t(`form.${type}`)}
      <input
        placeholder={placeholder}
        name={type}
        id={type}
        className={inputStyle}
        type={inputType}
        autoComplete={autoComplete}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        aria-invalid="true"
        aria-errormessage={`${type}-error`}
        autoFocus={isAutoFocus}
      />
      {children}
    </label>
  );
};
export default Input;
