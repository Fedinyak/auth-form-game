const Score = ({ score }) => {
  const ShowScore = score.player === 0 && score.cat === 0;

  return (
    <div className="score-container">
      {ShowScore || (
        <>
          <p className="score-numbers score-player" key={`${score.player}-p`}>
            {score.player}
          </p>
          <p className="score-numbers score-semicolon">:</p>
          <p className="score-numbers score-cat" key={`${score.cat}-c`}>
            {score.cat}
          </p>
        </>
      )}
    </div>
  );
};

export default Score;
