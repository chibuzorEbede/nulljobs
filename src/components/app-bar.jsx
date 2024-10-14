import React, { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import Switch from "./shared/toggle";
import { Link } from "react-router-dom";

const AppBar = ({ title = "NullJobs" }) => {
  const [toggleValue, setToggleValue] = useState("-translate-x-3");

  const theme = () => {
    let mode = "";
    //light mode
    if (toggleValue === "translate-x-3") {
      document.documentElement.classList.remove("dark");
      mode = "-translate-x-3";
      // setToggleValue(mode)
    } else {
      document.documentElement.classList.add("dark");
      mode = "translate-x-3";
      // setToggleValue(mode)
    }
    return mode;
  };

  return (
    <header className=" bg-hero-pattern text-white dark:bg-white dark:text-white p-5 flex justify-between items-center md:rounded-bl-3xl min-h-[20vh]">
      <Link to={`/`} className="text-3xl font-bold ">
        {title}
      </Link>
      <div className="flex items-center justify-around gap-3">
        <MdLightMode />
        <Switch
          toggleHandler={() => setToggleValue(theme)}
          toggleValue={toggleValue}
        />
        <MdDarkMode />
      </div>
    </header>
  );
};

export default AppBar;
