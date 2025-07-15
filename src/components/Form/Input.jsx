import classNames from "classnames";
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
export default Input;
