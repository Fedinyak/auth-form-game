const Score = ({ score }) => {
  return (
    <div className="score-container">
      <p className="score-numbers">
        {score.player}:{score.cat}
      </p>
    </div>
  );
};

export default Score;
