import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LuClock10 } from "react-icons/lu";
import { FaThermometer } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";

const Head = () => {
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

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yy = today.getFullYear() % 100;
  today = dd + " . " + mm + " . " + yy;

  return (
    <>
      {data.message === "city not found" ? (
        ""
      ) : (
        <div className="h-auto flex flex-col  justify-between items-center">
          <div className="mb-3">
            <span className=" text-5xl text-blue-100">{data.length !== 0 && data.name}</span>
          </div>

          <div className="flex   justify-evenly items-center">
            <div className="  flex flex-col justify-between items-center mr-48">
              <span className="flex  justify-center items-center  capitalize mt-4 ">
                <FaThermometer />
                <span className="text-xl ml-2">
                  {data.length !== 0 && data.weather[0].description}
                </span>
              </span>
              <p className="text-7xl leading-tight font-extralight mt-5 ">
                {isKelvin
                  ? data.length !== 0 && Math.trunc(data.main.feels_like)
                  : degree}
                °
                <sup className=" leading-tight font-extralight ">
                  {isKelvin ? "K" : "C"}
                </sup>
              </p>
            </div>

            <div className=" flex flex-col justify-between items-center ">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl " ><IoCalendarClearOutline /></span>
                <span className="text-xl  ml-2">{today}</span>
              </div>

              <span className="capitalize">
                <div>
                  <span className="text-2xl flex  justify-center items-center mt-2">
                    <LuClock10 /> <span className="ms-2">{localTime}</span>
                  </span>
                  <hr className="my-1 " />
                  <p className="text-blue-300  text-2xl ">Real Time</p>
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Head;
