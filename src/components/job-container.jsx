import JobHeader from "./job-header";
import JobBody from "./job-body";
import JobFooter from "./job-footer";
import Loading from "./shared/loading";

const JobContainer = ({ jobData }) => {
  if (!jobData) {
    throw new Error("Job data is not valid");
  }
  return (
    <>
      <div className="w-[90%] md:w-[70%] mx-auto  -mt-8">
        <JobHeader headerData={jobData} />
        <JobBody bodyData={jobData} />
      </div>
      <JobFooter footerData={jobData} />
    </>
  );
};

export default JobContainer;
