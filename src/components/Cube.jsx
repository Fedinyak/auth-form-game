import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
            <button className="button button-logout" onClick={playerPushButton}>
              <span className="button-text"> {t("form.buttonLogout")} </span>
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
