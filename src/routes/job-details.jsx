import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import AppBar from "../components/app-bar";
import JobContainer from "../components/job-container";
import { useParams } from "react-router-dom";
import axios from "axios";

const JobDetails = () => {
  const { jobId } = useParams();
  const [jobDetailsData, setJobDetailsData] = useState([]);
  //use the jobId to make a call to the api and get the job details for the matching job in the api's job list

  const liveUrl = `https://apps.chibuzor.online/details/${jobId}`;
  // const localUrl = `http://localhost:3002/details/${jobId}`;
  useEffect(() => {
    axios.get(liveUrl).then((response) => {
      setJobDetailsData(response.data);
    });
  }, []);
  if (!jobDetailsData) {
    return null;
  }
  return (
    <Layout>
      <AppBar />
      <JobContainer jobData={jobDetailsData} />
    </Layout>
  );
};

export default JobDetails;
