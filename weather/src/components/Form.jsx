import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import { useDispatch } from "react-redux";
import { getPrognos } from "../features/redux/weatherSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPrognos(query));
    setQuery("");
  };
  useEffect(() => {
    dispatch(getPrognos());
  }, [dispatch]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex justify-center items-center w-8/12 mt-12"
    >
      <Buttons />
      <input
        className="w-full capitalize bg-[#f3f4f6] outline-none border-none text-[#474747] h-10 rounded-sm  indent-2"
        type="text"
        placeholder="Search City"
        value={query}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
};

export default Form;
