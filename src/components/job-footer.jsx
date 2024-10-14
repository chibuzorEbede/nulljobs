import React from "react";
import Button from "./shared/button";

const JobFooter = () => {
  return (
    <section className=" w-[90%] md:w-[70%]  mx-auto flex items-center justify-between bg-white dark:bg-slate-900  shadow-sm p-4 rounded-md">
      <div>
        <h4 className="capitalize font-bold dark:text-slate-50">
          senior software engineer
        </h4>
        <p className="text-xs text-slate-400">scooter</p>
      </div>
      <Button text={`apply now`} />
    </section>
  );
};

export default JobFooter;

//TODO
//make the bottom color spread out fully end to end on desktop mode
