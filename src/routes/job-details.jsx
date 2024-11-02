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

  const liveUrl = `https://e1da64a0-e051-4459-a7d7-fecf8bbe0557-00-bwc9ui1rn0v4.spock.replit.dev/details/${jobId}`;
  // const localUrl = `http://localhost:3002/details/${jobId}`;
  useEffect(() => {
    axios.get(liveUrl).then((response) => {
      console.log("data from backend is ", response.data);
      setJobDetailsData(response.data);
    });
  }, []);
  console.log("the jod data is: ", jobDetailsData);
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
