import React from "react";
import { useSelector } from "react-redux";

function Cover() {
  const data = useSelector((state) => state.weather.data);
  const degree =
    data.message === "city not found"
      ? ""
      : data.length !== 0 && Math.trunc(data.main.feels_like - 273);

  const isRainy =
    data.message === "city not found"
      ? false
      : data.length !== 0 &&
        data.weather[0].description.toLowerCase().includes("rain");

  const isSnowy =
    data.message === "city not found"
      ? false
      : data.length !== 0 &&
        data.weather[0].description.toLowerCase().includes("snow");

  return (
    <div className="relative bottom-4">
      {data.message === "city not found" ? (
        ""
      ) : degree > 25 ? (
        <img
          className="w-60 h-60 mb-14 rounded-full"
          src="https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VufGVufDB8fDB8fHww"
          alt="this is the city weather sunny"
        />
      ) : isRainy ? (
        <img
          className="w-60 h-60 mb-14 rounded-full"
          src="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="this is the city weather rainy"
        />
      ) : isSnowy ? (
        <img
          className="w-60 h-60 mb-14 rounded-full"
          src="https://images.unsplash.com/photo-1457269449834-928af64c684d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25vd3xlbnwwfHwwfHx8MA%3D%3D"
          alt="this is the city weather snowy"
        />
      ) : (
        <img
          className="w-60 h-60 mb-14 rounded-full"
          src="https://images.unsplash.com/photo-1695931368947-30a9eb3b3ef8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VuJTIwY2xvdWRseXxlbnwwfHwwfHx8MA%3D%3D"
          alt="this is the city weather normal"
        />
      )}
    </div>
  );
}

export default Cover;
