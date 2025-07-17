import { useState } from "react";
import Container from "./components/Container/Container";
import Cube from "./components/Cube/Cube";
import Form from "./components/Form/Form";
import Score from "./components/Score/Score";
import LanguageSwitchBtn from "./components/Ui/LanguageSwitchBtn";

function App() {
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
  };

  const catGetScore = () => {
    setScore({ player: score.player, cat: calculateScore(score.cat) });
  };

  return (
    <Container>
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
      </Cube>
    </Container>
  );
}

export default App;
