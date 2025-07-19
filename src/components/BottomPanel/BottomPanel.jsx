import ErrorDisplay from "../Ui/ErrorDisplay";
import LanguageSwitchBtn from "../Ui/LanguageSwitchBtn";
import Preloader from "../Ui/Preloader";

const BottomPanel = ({ isShowloader, errorMessage }) => {
  return (
    <div className="bottom-panel">
      <div className="preloader-wrap">
        <span>{isShowloader && <Preloader />}</span>
      </div>
      <ErrorDisplay errorMessage={errorMessage} />
      <LanguageSwitchBtn />
    </div>
  );
};

export default BottomPanel;
