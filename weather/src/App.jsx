import React from "react";
import { Routes, Route } from "react-router-dom";
import Weather from "./components/Weather";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Weather />} />
    </Routes>
  );
}
export default App;
