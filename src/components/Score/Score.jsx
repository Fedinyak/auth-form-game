const Score = ({ score }) => {
  return (
    <div className="score-container">
      {score.player === 0 && score.cat === 0 ? (
        ""
      ) : (
        // <p className="score-numbers">
        //   {score.player}:{score.cat}
        // </p>
        <>
          <p className="score-numbers score-player" key={score.player + "-p"}>
            {score.player}
          </p>
          <p className="score-numbers score-semicolon">:</p>
          <p className="score-numbers score-cat" key={score.cat + "-c"}>
            {score.cat}
          </p>
        </>
      )}
    </div>
  );
};

export default Score;
