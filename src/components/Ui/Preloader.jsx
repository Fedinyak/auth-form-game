import { useEffect, useState } from "react";

const Preloader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const preloaderElements = ["|", "/", "—", "\\"];
  const space = "\u00A0";
  const preloaderElements = [
    `(${space + space + space + space}`,
    `${space}¯${space + space + space}`,
    `${space + space}\\${space + space}`,
    `${space + space + space}_${space}`,
    `${space + space + space + space})`,
    `${space + space + space}¯${space}`,
    `${space + space}/${space + space}`,
    `${space}_${space + space + space}`,
  ];

  const getPreloaderElement = (index, elements) => {
    if (index === elements.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index + 1);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      getPreloaderElement(currentIndex, preloaderElements);
    }, 100);

    return () => clearInterval(timerId);
  });

  return (
    <>
      <div className="preloader-container">
        (_<span className="preloader-letter-shift">¯</span>/
        <span className="preloader-letter-shift">\</span>¯
        <span className="preloader-letter-shift">_</span>)
        <span className="preloader-animation">
          {preloaderElements[currentIndex]}
        </span>
      </div>
    </>
  );
};

export default Preloader;
