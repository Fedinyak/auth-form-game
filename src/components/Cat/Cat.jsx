import { useEffect, useRef } from "react";

const Cat = ({ isLogin, catPushButton, catGetScore, isCatAngry }) => {
  const divRef = useRef(null);
  // const pawHeight = 189;
  const pawHeight = 190;

  useEffect(() => {
    if (divRef.current) {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          if (entry.contentRect.height === pawHeight && isLogin) {
            catPushButton();
            if (!isCatAngry) {
              catGetScore();
            }
          }
        }
      });

      resizeObserver.observe(divRef.current);
      // Cleanup function to disconnect the observer when the component unmounts
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [isLogin, catGetScore]);

  return (
    <>
      <div className="cap"></div>
      <div className="cat"></div>
      <div className="paw" ref={divRef}></div>
    </>
  );
};

export default Cat;
