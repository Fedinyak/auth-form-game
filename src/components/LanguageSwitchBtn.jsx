// import { Segmented } from 'antd';
import { useTranslation } from "react-i18next";

const LanguageSwitchBtn = () => {
  const { i18n } = useTranslation();
  const getLang = i18n.language;
  // console.log(getLang);

  const handleChange = newLanguage => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    // <Segmented
    //   options={[
    //     { label: 'En', value: 'en' },
    //     { label: 'Ru', value: 'ru' },
    //   ]}
    //   value={getLang}
    //   onChange={handleChange}
    // />
    // <Segmented
    //   options={[
    //     { label: 'En', value: 'en' },
    //     { label: 'Ru', value: 'ru' },
    //   ]}
    //   value={getLang}
    //   onChange={handleChange}
    // />
    <div>
      <button
        className={`${getLang === "en" ? "active" : ""} `}
        onClick={() => handleChange("en")}
      >
        en
      </button>
      <button
        className={`${getLang === "ru" ? "active" : ""} `}
        onClick={() => handleChange("ru")}
      >
        ru
      </button>
      <br />
      {getLang}
    </div>
  );
};
export default LanguageSwitchBtn;
