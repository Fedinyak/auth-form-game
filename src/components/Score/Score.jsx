import { useTranslation } from "react-i18next";

const Score = ({ score }) => {
  const { t } = useTranslation();

  const isScoreShow = score.player === 0 && score.cat === 0;

  return (
    <div className="score-container">
      {isScoreShow || (
        <>
          <p className="score-numbers score-player" key={`${score.player}-p`}>
            <span className="visually-hidden">{t("score.player")}</span>
            {score.player}
          </p>
          <p className="score-numbers score-semicolon">:</p>
          <p className="score-numbers score-cat" key={`${score.cat}-c`}>
            <span className="visually-hidden">{t("score.cat")}</span>
            {score.cat}
          </p>
        </>
      )}
    </div>
  );
};

export default Score;
