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

export default ErrorMessage;
