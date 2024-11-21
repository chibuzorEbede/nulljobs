import { Link } from "react-router-dom";
import { ButtonSecondary } from "./shared/button";
import {
  generateCompanyWebsiteLink,
  getApproximateCompanyDomain,
} from "../utils";

const JobHeader = ({ headerData }) => {
  if (!headerData) {
    throw new Error("header data is not set");
  }
  const { companyLogo, companyName, description } = headerData;
  let d = document.createElement("html");
  d.innerHTML = description;

  return (
    <section className=" flex flex-col md:flex-row  gap-4 md:gap-8 items-center md:justify-start bg-white dark:bg-slate-900 dark:text-slate-400 shadow-sm rounded-md">
      <img
        className="w-[50px] h-[50px] aspect-square object-cover rounded-lg md:rounded-none -mt-6 md:-mt-0 md:w-[110px] md:h-[110px] shadow-sm"
        src={companyLogo}
        alt="logo"
        width={`auto`}
        height={`auto`}
      />

      <div className=" text-center md:text-left">
        <h3 className="font-bold text-2xl md:text-base capitalize dark:text-slate-50">
          {companyName}
        </h3>
        <p className="text-sm text-slate-400">{`${getApproximateCompanyDomain(
          companyName
        )}`}</p>
      </div>
      <div className="pb-4 md:pb-0 md:ml-auto md:pr-4">
        <Link to={`${generateCompanyWebsiteLink(companyName)}`} target="_blank">
          <ButtonSecondary text={`Company Site`} />
        </Link>
      </div>
    </section>
  );
};

export default JobHeader;
