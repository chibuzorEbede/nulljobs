import React from "react";
import Layout from "../components/layout";
import AppBar from "../components/app-bar";
import JobContainer from "../components/job-container";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { jobId } = useParams();
  console.log("job id is: ", jobId);
  return (
    <Layout>
      <AppBar />
      <JobContainer />
    </Layout>
  );
};

export default JobDetails;
