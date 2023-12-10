import React from "react";
import Layout from "../components/layout/Layout";
import Main from "../components/Main";

function Weather() {
  return (
    <Layout>
      <div className=" sm:h-auto flex justify-between flex-col p-10 lg:h-screen">
        <Main />
      </div>
    </Layout>
  );
}

export default Weather;
