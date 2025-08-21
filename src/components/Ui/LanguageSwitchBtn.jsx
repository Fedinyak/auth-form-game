import { useTranslation } from "react-i18next";
import classNames from "classnames";

const LanguageSwitchBtn = () => {
  const { i18n } = useTranslation();
  const getLang = i18n.language;

  const { t } = useTranslation();

  const handleChange = newLanguage => {
    i18n.changeLanguage(newLanguage);
  };

  const buttonClassEn = classNames("button-text button-text-radio", {
    activeBtnLang: getLang === "en",
  });

  const buttonClassRu = classNames("button-text button-text-radio", {
    activeBtnLang: getLang === "ru",
  });

  return (
    <form>
      <fieldset className="language-button-container">
        <legend className="visually-hidden">{t("switchLanguage.title")}</legend>
        <label onClick={() => handleChange("en")}>
          <input
            className="button button-language"
            type="radio"
            id="en"
            checked={getLang === "en"}
            aria-label={t("switchLanguage.toEn")}
            readOnly={true}
          />
          <span className={buttonClassEn}>en</span>
        </label>
        <label onClick={() => handleChange("ru")}>
          <input
            className="button button-language"
            type="radio"
            id="ru"
            checked={getLang === "ru"}
            aria-label={t("switchLanguage.toRu")}
            readOnly={true}
          />
          <span className={buttonClassRu}>ru</span>
        </label>
      </fieldset>
    </form>
  );
};
export default LanguageSwitchBtn;
