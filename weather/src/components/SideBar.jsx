import React from "react";
import Form from "./Form";
import Result from "./Result";

function Sidebar() {
  return (
    <div className="flex flex-col h-full items-center py-12">
      <Form />
      <Result />
    </div>
  );
}

export default Sidebar;
