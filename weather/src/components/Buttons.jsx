import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDegree } from "../features/redux/changeDegreSlice";
import { changeStatus } from "../features/redux/changeStatusSlice";
import AnimatedButton from "./AnimatedButton ";

const Buttons = () => {
  const dispatch = useDispatch();

  const isDark = useSelector((state) => state.changeStatus.isDark);
  const [toggle] = useState(true);

  const handleClick = () => {
    dispatch(changeStatus(isDark));
    toggle((prevIsDark) => !prevIsDark);
  };

  const changetoKelvin = () => {
    dispatch(changeDegree(false));
  };

  const changetoSelsi = () => {
    dispatch(changeDegree(true));
  };

  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex justify-between items-center text-sm">
        <div className="flex justify-center items-center flex-col">
          <div className="mb-2">
            <span className="me-4">
              <AnimatedButton
                onClick={changetoKelvin}
                isDark={isDark}
                text="C °"
              />
            </span>
            <span>
              <AnimatedButton
                onClick={changetoSelsi}
                isDark={isDark}
                text="K °"
              />
            </span>
          </div>
          <span>
            <AnimatedButton
              onClick={handleClick}
              isDark={isDark}
              text={isDark ? "Dark Mode" : "Light Mode"}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
