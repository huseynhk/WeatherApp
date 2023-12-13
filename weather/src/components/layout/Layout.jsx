import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../SideBar";

const Layout = ({ children }) => {
  const isDark = useSelector((state) => state.changeStatus.isDark);

  return (
    <>
      {
        <div
          className={
            isDark
              ? "flex w-full h-[100vh]  bg-[#000] text-white "
              : "flex w-full h-[100vh]  bg-[#fff] text-black "
          }
        >
          <div
            className={
              isDark
                ? "w-2/4 h-auto rounded bg-[#000] "
                : "w-2/4 rounded bg-white text-black "
            }
          >
            <Sidebar />
          </div>
          <div
            className={
              isDark
                ? " w-3/4 bg-[#000] text-white "
                : "w-3/4 bg-[#fff] text-black "
            }
          >
            {children}
          </div>
        </div>
      }
    </>
  );
};

export default Layout;
