import JobHeader from "./job-header";
import JobBody from "./job-body";
import JobFooter from "./job-footer";

const JobContainer = ({ jobData }) => {
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
