import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Button from "./shared/button";

const DesktopSearch = () => {
  const IconSize = 20;
  return (
    <div className="hidden md:flex p-5  gap-3 justify-evenly   items-center w-[90%] bg-white dark:bg-slate-900 text-rose-800 dark:text-rose-800 -mt-8 mx-auto rounded-md shadow-sm">
      <IconTextInput
        icon={<IoMdSearch size={IconSize} />}
        text={`filter by title, companies...`}
      />
      <IconTextInput
        icon={<FaLocationDot size={IconSize} />}
        text={`filter by location`}
      />
      <IconCheckInput />
    </div>
  );
};

export default DesktopSearch;

const IconTextInput = ({ icon, text }) => {
  return (
    <div className="flex items-center justify-center border-r border-rose-800 bg-white  pl-2">
      {icon}
      <input
        className="capitalize  p-2 outline-none "
        type="text"
        name=""
        id=""
        placeholder={text}
      />
    </div>
  );
};
const IconCheckInput = () => {
  return (
    <div className="flex items-center justify-center ">
      <input
        className="capitalize outline-none p-2  rounded-md"
        type="checkbox"
        name="jobType"
        id="jobType"
      />
      <label
        htmlFor="jobType"
        className="capitalize mx-2  text-slate-950 dark:text-white"
      >
        full time only
      </label>
      <Button text={`search`} />
    </div>
  );
};
