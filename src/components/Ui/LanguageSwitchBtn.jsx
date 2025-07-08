import { useTranslation } from "react-i18next";
import classNames from "classnames";

const LanguageSwitchBtn = () => {
  const { i18n } = useTranslation();
  const getLang = i18n.language;

  const handleChange = newLanguage => {
    i18n.changeLanguage(newLanguage);
  };

  const buttonClassEn = classNames("button button-language", {
    active: getLang === "en",
  });

  const buttonClassRu = classNames("button button-language", {
    active: getLang === "ru",
  });

  return (
    <div className="language-button-container">
      <button className={buttonClassEn} onClick={() => handleChange("en")}>
        <span className="button-text">en</span>
      </button>
      <button className={buttonClassRu} onClick={() => handleChange("ru")}>
        <span className="button-text">ru</span>
      </button>
    </div>
  );
};
export default LanguageSwitchBtn;
