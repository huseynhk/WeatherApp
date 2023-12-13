import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Main = () => {
  const data = useSelector((state) => state.weather.data);

  return (
    <>
      {data.message === "city not found" ? (
        ""
      ) : (
        <div className="sm:mb-10 md:mb-6 lg:mb-4 w-full h-auto relative sm:top-12 md:bottom-2 lg:bottom-2 grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-8 ">
          <div className="col-span-2">
            <Card
              text={"Timezone"}
              data={data.length !== 0 && data.timezone.slice(0, 10)}
            />
          </div>
          <div className="col-span-2">
            <Card text={"City Name"} data={data.length !== 0 && data.name} />
          </div>
          <div className="col-span-2">
            <Card text={"City Cod"} data={data.length !== 0 && data.cod} />
          </div>
          <div className="col-span-2">
            <Card
              text={"Max_Kelvin"}
              data={data.length !== 0 && data.main.temp_max}
            />
          </div>
          <div className="col-span-2">
            <Card
              text={"Min_Kelvin"}
              data={data.length !== 0 && data.main.temp_min}
            />
          </div>
          <div className="col-span-2">
            <Card
              text={"Visibility"}
              data={`${data.length !== 0 && data.visibility / 1000}`}
            />
          </div>
          <div className="col-span-2">
            <Card
              text={"Wind speed"}
              data={data.length !== 0 && data.wind.speed}
            />
          </div>
          

          <div className="col-span-2">
            <Card
              text={"Humidity"}
              data={data.length !== 0 && data.main.humidity}
            />
          </div>
   
          <div className="col-span-2">
            <Card
              text={"Pressure"}
              data={data.length !== 0 && data.main.pressure}
            />
          </div>

          <div className="col-span-2">
            <Card
              text={"Country cod"}
              data={data.length !== 0 && data.sys.country}
            />
          </div>
          <div className="col-span-2">
            <Card
              text={"Sunrise"}
              data={data.length !== 0 && data.sys.sunrise}
            />
          </div>
          <div className="col-span-2">
            <Card text={"Sunset"} data={data.length !== 0 && data.sys.sunset} />
          </div>
          <div className="col-span-2">
            <Card
              text={"Sky"}
              data={data.length !== 0 && data.weather[0].main}
            />
          </div>
          <div className="col-span-2">
            <Card
              text={"Info"}
              data={data.length !== 0 && data.weather[0].description}
            />
          </div>

          <div className="col-span-2">
            <Card text={"Base"} data={data.length !== 0 && data.base} />
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
