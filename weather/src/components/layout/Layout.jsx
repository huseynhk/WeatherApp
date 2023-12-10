import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../SideBar";

function Layout({ children }) {
  const isDark = useSelector((state) => state.changeStatus.isDark);
  const data = useSelector((state) => state.weather.data);
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      {data.message === "city not found" ? (
        <div className="flex justify-center items-center text-white text-3xl h-screen bg-[#131313]">
          <div className="flex justify-between h-1/12 flex-col items-center">
            <div> City not found ..</div>
            <button
              className="border-[2px] px-4 py-2 text-lg mt-6"
              onClick={() => refreshPage()}
            >
              Try  Again
            </button>
          </div>
        </div>
      ) : (
        <div
          className={
            isDark
              ? "flex w-full h-[100vh] sm:flex-col lg:flex-row bg-[#131313] text-white "
              : "flex w-full h-[100vh] sm:flex-col lg:flex-row bg-[#f3f4f6] text-black "
          }
        >
          <div
            className={
              isDark
                ? "w-full sm:w-full lg:w-1/3 h-auto rounded-tr-[50px] bg-[#161616] "
                : "w-full sm:w-full lg:w-1/3 h-auto rounded-tr-[50px] bg-white text-black "
            }
          >
            <Sidebar />
          </div>
          <div
            className={
              isDark
                ? " w-full sm:w-full lg:w-2/3 bg-[#131313] text-white "
                : "w-full sm:w-full lg:w-2/3  bg-[#f3f4f6] text-black "
            }
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
