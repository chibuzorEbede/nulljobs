import axios from "axios";
import React, { useState } from "react";
import { BsFunnelFill } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";

const FilterInput = ({ filterBySearch }) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Filter by title");
  const [filteredData, setFilteredData] = useState([]);

  //set the icon size in pixels
  const IconSize = 26;

  //choose the type of filter
  const setFilterType = () => {
    console.log(event.target);
    setIsFiltered(!isFiltered);
  };

  //input handler functions
  const handleSearchInputChange = (event) => {
    //should add a debouncing function here?
    setSearchTerm(event.target.value);
  };

  //search function
  const handleSearch = () => {
    //make a call to the api and pass the search term
    axios
      .get(`http://localhost:8000/jobs/${searchTerm}`)
      .then((result) => {
        setFilteredData(result.data);
      })
      .catch((err) => console.error(err));

    console.log("filtered data is ", filteredData);
    filterBySearch(filteredData);
  };

  return (
    <div className="md:hidden p-5 flex  items-center w-[90%] bg-white  dark:bg-slate-900 dark:text-rose-800 -mt-8 mx-auto rounded-md shadow-sm">
      <input
        className="w-4/6 outline-none p-2  rounded-md text-rose-800 placeholder:text-sm"
        type="text"
        name="filterTerm"
        id="filterTerm"
        placeholder="Filter by title"
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <aside className="flex justify-end gap-4 items-center   w-2/6">
        <div className="text-rose-800">
          <BsFunnelFill size={IconSize} onClick={setFilterType} />
        </div>
        <div
          onClick={handleSearch}
          className="bg-rose-800 text-white dark:bg-white dark:text-rose-800 rounded-md p-2"
        >
          <IoMdSearch size={IconSize} />
        </div>
      </aside>

      <aside className="absolute right-[22%] z-10 ">
        {isFiltered && <FilterType handleChange={() => setFilterType()} />}
      </aside>
    </div>
  );
};

export default FilterInput;

const FilterType = ({ handleChange }) => {
  return (
    <select
      onChange={handleChange}
      className="p-2 outline-none shadow-sm"
      name=""
      id=""
    >
      <option value="">companies</option>
      <option value="">expertise</option>
      <option value="">location</option>
    </select>
  );
};
