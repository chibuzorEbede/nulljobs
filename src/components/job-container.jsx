import JobHeader from "./job-header";
import JobBody from "./job-body";
import JobFooter from "./job-footer";

const JobContainer = () => {
  return (
    <>
      <div className="w-[90%] md:w-[70%] mx-auto  -mt-8">
        <JobHeader />
        <JobBody />
      </div>
      <JobFooter />
    </>
  );
};

export default JobContainer;
