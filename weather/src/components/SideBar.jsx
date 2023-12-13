import React from "react";
import Form from "./Form";
import Cover from "./Cover";
import Head from "./Head";

const SideBar = () => {
  return (
    <div className="flex flex-col  items-center ">
      <Cover />
      <Head />
      <Form />
    </div>
  );
};

export default SideBar;
