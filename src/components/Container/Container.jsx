const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="bg-1"></div>
      <div className="bg-2"></div>
      <div className="bg-3"></div>
      {children}
    </div>
  );
};

export default Container;
