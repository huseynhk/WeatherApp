import React, { useState  } from "react";
import { useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";

const Card = ({ text, data }) => {
  const isDark = useSelector((state) => state.changeStatus.isDark);
  const [reset, setReset] = useState(false);

  const cardAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },
    to: async (next) => {
      await next({ opacity: 1, transform: "translateX(0)" });
    },

    backgroundColor: isDark ? "#161616" : "white",
    color: isDark ? "white" : "black",
    boxShadow: isDark
      ? "0px 4px 6px rgba(255, 255, 255, 0.1)"
      : "0px 4px 6px rgba(0, 0, 0, 0.1)",
    config: { mass: 1, tension: 180, friction: 12 },
  });

  const lightAnimation = useSpring({
    loop: { reverse: true },
    onRest: () => setReset(!reset),
    reset: reset, 
    from: { backgroundColor: isDark ? "#161616" : "white" },
    to: { backgroundColor: isDark ? "#333" : "#eee" },
    config: { duration: 1250 },
  });

  return (
    <animated.div
      className={`flex flex-col text-center h-full rounded justify-between py-4 px-7`}
      style={{ ...cardAnimation, ...lightAnimation }}
    >
      <h1 className="capitalize text-center p-1">{text}</h1>
      <span className="text-xl h-2 flex justify-center items-center p-4">
        {data}
      </span>
    </animated.div>
  );
};

export default Card;
