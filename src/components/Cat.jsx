import { useEffect, useRef } from "react";

const Cat = ({ isLogin, catPushButton, catGetScore, isCatAngry }) => {
  const divRef = useRef(null);
  // const pawHeight = 189;
  const pawHeight = 190;

  useEffect(() => {
    if (divRef.current) {
      const resizeObserver = new ResizeObserver(entries => {
        // console.log(entries, "entries");
        for (let entry of entries) {
          // Log the new dimensions
          // console.log(
          //   "Div dimensions changed:",
          //   entry.contentRect.width,
          //   entry.contentRect.height,
          //   entry
          // );
          // Perform other actions based on the new dimensions
          if (entry.contentRect.height === pawHeight && isLogin) {
            catPushButton();
            if (!isCatAngry) {
              catGetScore();
            }
            // setIsLogin(false);
            // setIsCatPushButton(true);
            // setScore({ player: score.player, cat: score.cat + 1 });
            console.log(
              "yeeeeeeee",
              entry.contentRect.height > pawHeight,
              entry.contentRect.height
            );
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
