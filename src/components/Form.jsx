import { useState, useRef, useEffect } from "react";
import Cube from "./Cube";

const Form = () => {
  const [login, setLogin] = useState(false);
  const [logout, setLogout] = useState(false);
  const [angryCat, setAngryCat] = useState(false);

  const loginHandle = () => {
    setLogin(!login);
    setLogout(false);
    setAngryCat(false);
  };

  const logoutHandle = () => {
    setAngryCat(true);
  };

  const divRef = useRef(null);
  const buttonRef = useRef(null);
  // const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (divRef.current) {
      const resizeObserver = new ResizeObserver(entries => {
        // console.log(entries, "entries");
        for (let entry of entries) {
          // Log the new dimensions
          // console.log(
          //   "Div dimensions changed:",
          //   entry.contentRect.width,
          //   entry.contentRect.height,
          //   entry
          // );
          // Perform other actions based on the new dimensions
          if (entry.contentRect.height > 189) {
            setLogin(false);
            setLogout(true);
            console.log(
              "yeeeeeeee",
              entry.contentRect.height > 189,
              entry.contentRect.height
            );
          }
        }
      });

      resizeObserver.observe(divRef.current);
      // Cleanup function to disconnect the observer when the component unmounts
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('Form submitted:', formData);
  };

  return (
    <Cube>
      <div
        className={`container ${login ? "flip" : ""} ${
          logout ? "backflip" : ""
        } ${angryCat ? "angry" : ""}`}
      >
        <div className="form-section">
          <div className="form-container">
            <div className="form-login-container">
              <form className="form" onSubmit={handleSubmit}>
                <label>
                  Email: <input type="email" autocomplete="username" />
                </label>
                <label>
                  Password:{" "}
                  <input type="password" autocomplete="current-password" />
                </label>
                <button className="form-button-login" onClick={loginHandle}>
                  Sign Up
                </button>
              </form>
            </div>
            <div className="form-logout-container">
              <button
                className="form-button-logout"
                onClick={logoutHandle}
                ref={buttonRef}
              >
                Logout
              </button>
            </div>
            <div className="cap"></div>
            <div className="cat"></div>
            <div className="paws" ref={divRef}></div>
          </div>
        </div>
      </div>
    </Cube>
  );
};

export default Form;
