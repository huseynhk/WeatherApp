import React from "react";
import Layout from "./layout/Layout";
import Main from "./Main";

const Weather = () => {
  return (
    <Layout>
      <div className="flex justify-between flex-col px-10 py-6 ">
        <Main />
      </div>
    </Layout>
  );
};

export default Weather;
