import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LuClock10 } from "react-icons/lu";
import { FaThermometer } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";

function Head() {
  const data = useSelector((state) => state.weather.data);
  const isKelvin = useSelector((state) => state.changeDegre.isKelvin);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    if (data.timezone) {
      const cityTime = new Date(
        new Date().toLocaleString("en-US", { timeZone: data.timezone })
      );

      const hours = cityTime.getHours();
      const minutes = cityTime.getMinutes().toString().padStart(2, "0");

      setLocalTime(`${hours} : ${minutes}`);
      // setLocalTime(cityTime.getHours() + " : " + cityTime.getMinutes());
    }
  }, [data.timezone]);

  const degree =
    data.message === "city not found"
      ? ""
      : data.length !== 0 && Math.trunc(data.main.feels_like - 273);

  const name =
    data.message === "city not found" ? "" : data.length !== 0 && data.name;

  var today = new Date();

  var dd = String(today.getDate()).padStart(2, "0");

  var mm = String(today.getMonth() + 1).padStart(2, "0");

  var yyyy = today.getFullYear();

  today = mm + " . " + dd + " . " + yyyy;

  const desc =
    data.message === "city not found"
      ? ""
      : data.length !== 0 && data.weather[0].description;

  return (
    <>
      {data.message === "city not found" ? (
        ""
      ) : (
        <div className="h-auto flex  justify-between items-center">
          <div className=" flex flex-col justify-between items-start me-8">
            <span className=" text-3xl">{name}</span>

            <span className="flex  justify-center items-center  capitalize my-2 ">
              <FaThermometer />
              <span className="ms-2">{desc}</span>
            </span>

            <span className="capitalize mt-2">
              <div>
                <span className="text-lg flex  justify-center items-center">
                  <LuClock10 /> <span className="ms-2">{localTime}</span>
                </span>
                <hr className="my-1 " />
                <p className="text-blue-200  text-md ">Real Time</p>
              </div>
            </span>
          </div>

          <div className="  flex flex-col justify-between items-center">
            <div className="flex justify-between items-center  ">
            <span className="mb-2 me-2" >  <IoCalendarClearOutline /></span>
              <span className="text-lg mb-2 ">{today}</span>
            </div>
            <p className="text-[85px] leading-tight font-extralight ">
              {isKelvin
                ? data.length !== 0 && Math.trunc(data.main.feels_like)
                : degree}
              °
              <sup className=" leading-tight font-extralight ml-2">
                {isKelvin ? "K" : "C"}
              </sup>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Head;
