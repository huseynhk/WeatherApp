import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDegree } from "../features/redux/changeDegreSlice";
import { changeStatus } from "../features/redux/changeStatusSlice";

function Navbar() {
  const dispatch = useDispatch();

  const isDark = useSelector((state) => state.changeStatus.isDark);

  const handleClick = () => {
    dispatch(changeStatus(isDark));
    setChangeDark((prevIsDark) => !prevIsDark);
  };

  const changetoKelvin = () => {
    dispatch(changeDegree(false));
  };

  const changetoSelsi = () => {
    dispatch(changeDegree(true));
  };

  return (
    <div className="flex w-full justify-between items-center ">
      <div className="flex  justify-between items-center text-sm">
        <div className="flex justify-center items-center flex-col">
          <div className="mb-2">
            <button
              onClick={() => changetoKelvin()}
              className={
                isDark
                  ? " p-2 rounded shadow bg-white text-black  "
                  : " p-2 rounded first-line:rounded-full shadow bg-black text-white  "
              }
            >
              C °
            </button>
            <button
              onClick={() => changetoSelsi()}
              className={
                isDark
                  ? " p-2 rounded shadow bg-white text-black  ms-1"
                  : " p-2 rounded first-line:rounded-full shadow bg-black text-white  ms-1"
              }
            >
              K °
            </button>
          </div>
          <button onClick={() => handleClick()}>
            {isDark ? (
              <p className="text-lg font-extrabold  bg-white text-black px-4 py-1 rounded transition ease delay-100">
                Dark
              </p>
            ) : (
              <p className="text-lg font-extrabold  bg-black text-white px-4 py-1 rounded transition ease delay-100">
                Light
              </p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
