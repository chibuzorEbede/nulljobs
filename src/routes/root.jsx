import "../index.css";
import Layout from "../components/layout";
import AppBar from "../components/app-bar";
import FilterInput from "../components/shared/filter-input";
import List from "../components/list";
import DesktopSearch from "../components/desktop-search";
import Loading from "../components/shared/loading";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Root = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let isDataSet = useRef(false);

  //set the current url for use
  const liveUrl = `https://aab4b050-390e-4fac-8044-04dd579b7cad.us-east-1.cloud.genez.io/job-listings`;
  const localUrl = `http://localhost:8000/job-listings`;

  const setFilterData = (filterData) => {
    console.log("passed data is ", filterData);
    return filterData;
  };

  //set initial data on page load
  useEffect(() => {
    if (isDataSet.current === true) {
      setData(setFilterData);
      return;
    } else {
      console.log("runing the axios first fectch");
      axios
        .get(localUrl)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }

    return () => (isDataSet.current = true);
  }, [data]);

  if (!data) {
    throw new Error("please check connectivity, no data received");
  }
  return (
    <Layout>
      <AppBar />
      <FilterInput filterBySearch={setFilterData} />
      <DesktopSearch data={data} />
      {loading ? <Loading /> : <List data={data} />}
    </Layout>
  );
};

export default Root;
