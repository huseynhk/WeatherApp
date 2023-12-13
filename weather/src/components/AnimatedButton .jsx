import React from "react";
import { useSpring, animated } from "@react-spring/web";

const AnimatedButton = ({ onClick, isDark, text }) => {
  const { x } = useSpring({
    from: { x: 1 },
    x: 0,
    config: { duration: 1250, reset: true },
    loop: { reverse: true }, 
  });

  return (
    <animated.button
      onClick={onClick}
      className={`p-2 rounded shadow ${isDark ? "bg-white text-black" : "bg-black text-white"}`}
      style={{
        opacity: x.to({ range: [0, 1], output: [0.5, 1] }),
        scale: x.to({
          range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
          output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
        }),
      }}
    >
      {text}
    </animated.button>
  );
};

export default AnimatedButton;
