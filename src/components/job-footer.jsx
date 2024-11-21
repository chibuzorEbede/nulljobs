import React from "react";
import Button from "./shared/button";
import { Link } from "react-router-dom";

const JobFooter = ({ footerData }) => {
  //get footer data
  const { title, companyName, applicationLink } = footerData;
  return (
    <section className=" w-[90%] md:w-[70%]  mx-auto flex items-center justify-between bg-white dark:bg-slate-900  shadow-sm p-4 rounded-md">
      <div>
        <h4 className="capitalize font-bold dark:text-slate-50">{title}</h4>
        <p className="text-xs text-slate-400">{companyName}</p>
      </div>
      <Link to={`${applicationLink}`} target="_blank">
        <Button text={`apply now`} />
      </Link>
    </section>
  );
};

export default JobFooter;

//TODO
//make the bottom color spread out fully end to end on desktop mode
