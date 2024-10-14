import React from "react";
import Layout from "../components/layout";
import AppBar from "../components/app-bar";
import JobContainer from "../components/job-container";

const JobDetails = () => {
  return (
    <Layout>
      <AppBar />
      <JobContainer />
    </Layout>
  );
};

export default JobDetails;
