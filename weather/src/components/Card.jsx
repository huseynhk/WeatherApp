import React from "react";
import { useSelector } from "react-redux";

const Card = ({ text, data }) => {
  const isDark = useSelector((state) => state.changeStatus.isDark);
  

  return (
    <div
      className={
        isDark
          ? "flex flex-col text-white shadow-lg bg-[#161616] h-full rounded justify-between  text-center "
          : "flex flex-col text-black bg-white justify-between shadow-md h-full rounded-xl  text-center "
      }
    >
      <h1 className="capitalize text-center p-1 ">{text}</h1>
      <span className="text-[24px] h-16 flex justify-center items-center p-5 ">
        {data}
      </span>
    </div>
  );
};

export default Card;
