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
          <p className="score-numbers" key={score.player + "-p"}>
            {score.player}
          </p>
          <p className="score-numbers">:</p>
          <p className="score-numbers" key={score.cat + "-c"}>
            {score.cat}
          </p>
        </>
      )}
    </div>
  );
};

export default Score;
