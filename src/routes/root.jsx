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

  //set the current url for use
  const liveUrl = `https://aab4b050-390e-4fac-8044-04dd579b7cad.us-east-1.cloud.genez.io/job-listings`;
  // const localUrl = `http://localhost:8000/job-listings`;

  //set initial data on page load
  useEffect(() => {
    axios
      .get(liveUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(new Error(err)));
  }, []);

  //data manipulation functions
  /*
    TODO
  */

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
  if (!data) {
    throw new Error("please check connectivity, data is not set");
  }
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
