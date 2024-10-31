import React from "react";
import LogoAvatar from "./logo-avatar";
import { Link } from "react-router-dom";

const ListTile = ({ data }) => {
  //destructure the data
  const {
    companyName,
    pubDate,
    employmentType,
    title,
    locationRestrictions,
    companyLogo,
  } = data;

  //replace special chars in the guid string to enable proper routing
  const guid = data.guid.replace(/[^\w\s]/gi, "");

  return (
    <Link
      to={`/job/${guid}`}
      className=" relative bg-white text-slate-900 dark:text-slate-50 px-6 py-6 dark:bg-slate-900 rounded-md shadow-sm capitalize"
    >
      <LogoAvatar src={companyLogo} company={companyName} />
      <p className="text-slate-400  text-sm flex items-center gap-2 pt-3">
        <span>{new Date(pubDate * 1000).getMinutes() + "s ago"} </span>
        <span>.</span>
        <span>{employmentType}</span>
      </p>
      <h3 className="font-bold text-2xl pt-3">{title}</h3>
      <p className="text-slate-400 pt-3">{companyName}</p>
      <p className="text-rose-800 pt-4">{locationRestrictions[0]}</p>
    </Link>
  );
};

export default ListTile;
