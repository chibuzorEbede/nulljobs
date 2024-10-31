import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import AppBar from "../components/app-bar";
import JobContainer from "../components/job-container";
import { useParams } from "react-router-dom";
import axios from "axios";

const JobDetails = () => {
  const { jobId } = useParams();
  console.log("job id is: ", jobId);
  const [jobDetailsData, setJobDetailsData] = useState([]);
  //use the jobId to make a call to the api and get the job details for the matching job in the api's job list
  useEffect(() => {
    axios.get(`http://localhost:3002/details/${jobId}`).then((response) => {
      console.log("data from backend is ", response.data);
      setJobDetailsData(response.data);
    });
  }, []);
  console.log("the jod data is: ", jobDetailsData);
  return (
    <Layout>
      <AppBar />
      <JobContainer jobData={jobDetailsData} />
    </Layout>
  );
};

export default JobDetails;
