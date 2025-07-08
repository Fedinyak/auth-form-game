// import { useState } from "react";
import { useState } from "react";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Form from "./components/FormOld";
import Cube from "./components/Cube/Cube";
// import Cat from "./components/Cat";
import Form from "./components/Form/Form";
import Score from "./components/Score/Score";
import LanguageSwitchBtn from "./components/Ui/LanguageSwitchBtn";

function App() {
  // const [count, setCount] = useState(0);
  const [score, setScore] = useState({ player: 0, cat: 0 });
  const [isLogin, setIsLogin] = useState(false);
  const [isCatPushButton, setIsCatPushButton] = useState(false);
  const [isCatAngry, setIsCatAngry] = useState(false);

  const loginHandle = () => {
    setIsLogin(true);
    setIsCatPushButton(false);
    setIsCatAngry(false);
  };

  const playerPushButton = () => {
    setIsCatAngry(true);
    playerGetScore();
  };

  const calculateScore = num => {
    if (num >= 9 || num === "∞") {
      return "∞";
    }
    return num + 1;
  };

  const playerGetScore = () => {
    if (!isCatAngry) {
      setScore({ player: calculateScore(score.player), cat: score.cat });
    }
  };

  const catPushButton = () => {
    setIsLogin(false);
    setIsCatPushButton(true);
    // console.log(score, "score");
  };

  const catGetScore = () => {
    setScore({ player: score.player, cat: calculateScore(score.cat) });
  };

  return (
    <>
      <div className="container">
        <div className="bg-1"></div>
        <div className="bg-2"></div>
        <div className="bg-3"></div>
        <Score score={score} />
        <Cube
          score={score}
          catPushButton={catPushButton}
          isLogin={isLogin}
          isCatPushButton={isCatPushButton}
          isCatAngry={isCatAngry}
          playerPushButton={playerPushButton}
          setIsLogin={setIsLogin}
          setIsCatPushButton={setIsCatPushButton}
          catGetScore={catGetScore}
        >
          <Form loginHandle={loginHandle} />
          <LanguageSwitchBtn />

          {/* <Cat setIsLogin={setIsLogin} setIsCatPushButton={setIsCatPushButton} /> */}
        </Cube>
      </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React 1234567890</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
