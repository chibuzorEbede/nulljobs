import "../index.css";
import Layout from "../components/layout";
import AppBar from "../components/app-bar";
import FilterInput from "../components/shared/filter-input";
import List from "../components/list";
import DesktopSearch from "../components/desktop-search";
import Loading from "../components/shared/loading";
import { useEffect, useState } from "react";
import axios from "axios";

const Root = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  //fetch the initial data once from the backend
  const liveUrl = `https://apps.chibuzor.online/job-listings`;
  const localUrl = `http://localhost:3002/job-listings`;

  //data manipulation functions

  //take a data item and return the data filtered by the location parameter
  const filterBasedOnUserInput = (data, searchQuery) => {
    console.log("in the filter function");
    const filteredData = data.filter((itemData) =>
      itemData.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    console.log("filtered data is: ", filteredData);
    console.log("type of filtered data is: ", filteredData.length);
    //TODO
    //find a way to update the data state with the new one
    console.log("search query is ", searchQuery);
    console.log("original data is ", data);

    setData();
    return filteredData;
  };

  //set initial data on page load
  useEffect(() => {
    console.log("use effect running...");
    axios
      .get(liveUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Layout>
      <AppBar />
      <FilterInput />
      <DesktopSearch data={data} onFilter={filterBasedOnUserInput} />
      {loading ? <Loading /> : <List data={data} />}
    </Layout>
  );
};

export default Root;
