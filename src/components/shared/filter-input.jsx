import React from "react";
import { BsFunnelFill } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";

const FilterInput = () => {
  const IconSize = 26;
  return (
    <div className="md:hidden p-5 flex  items-center w-[90%] bg-white  dark:bg-slate-900 dark:text-rose-800 -mt-8 mx-auto rounded-md shadow-sm">
      <input
        className="w-4/6 outline-none p-2  rounded-md text-rose-800"
        type="text"
        name=""
        id=""
        placeholder="Filter by title"
      />
      <aside className="flex justify-end gap-4 items-center   w-2/6">
        <div className="text-rose-800">
          <BsFunnelFill size={IconSize} />
        </div>
        <div className="bg-rose-800 text-white dark:bg-white dark:text-rose-800 rounded-md p-2">
          <IoMdSearch size={IconSize} />
        </div>
      </aside>

      <aside className="absolute right-[22%] z-10 hidden">
        <FilterType />
      </aside>
    </div>
  );
};

export default FilterInput;

//not used yet
const FilterType = () => {
  return (
    <select className="p-2 outline-none shadow-sm" name="" id="">
      <option value="">companies</option>
      <option value="">expertise</option>
      <option value="">location</option>
    </select>
  );
};