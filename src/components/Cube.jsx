import Cat from "./Cat";
import classNames from "classnames";

const Cube = ({
  score,
  children,
  catPushButton,
  isLogin,
  isCatPushButton,
  isCatAngry,
  playerPushButton,
  catGetScore,
}) => {
  const cubeClass = classNames("cube", {
    flip: isLogin,
    backflip: isCatPushButton,
    angry: isCatAngry,
  });

  return (
    <div className={cubeClass}>
      <div className="cube-perspective">
        <div className="cube-preserve-3d">
          <div className="cube-front-side">{children}</div>
          <div className="cube-bottom-side ">
            <button className="button-logout" onClick={playerPushButton}>
              Logout
            </button>
          </div>
          <Cat
            score={score}
            catPushButton={catPushButton}
            isLogin={isLogin}
            catGetScore={catGetScore}
            isCatAngry={isCatAngry}
          />
        </div>
      </div>
    </div>
  );
};

export default Cube;
