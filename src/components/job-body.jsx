import Button from "./shared/button";
import { getAccuratePublishTime } from "../utils";
import { Link } from "react-router-dom";

const JobBody = ({ bodyData }) => {
  //destructure the body data details
  const { description, title, pubDate, locationRestrictions, applicationLink } =
    bodyData;

  //process the description
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(description, "text/html").body
    .children;
  const links = parser
    .parseFromString(description, "text/html")
    .getElementsByTagName("a");
  const htmlDocArray = [...htmlDoc];
  return (
    <section className="mt-8 bg-white dark:bg-slate-900 dark:text-slate-50 rounded-md shadow-sm p-4 mb-8">
      <div className="w-full flex flex-col md:flex-row md:items-center">
        <div className="mr-auto">
          <p className="text-xs text-slate-400">
            {getAccuratePublishTime(pubDate)}
          </p>
          <h2 className="text-2xl font-bold capitalize">{title}</h2>
          <span className="text-xs text-slate-400">
            {locationRestrictions?.[0]}
          </span>
        </div>
        <Link to={applicationLink} target="_blank">
          <Button text={`apply now`} />
        </Link>
      </div>

      <aside>
        {htmlDocArray.map((el) => (
          <section
            className="pt-8 text-slate-950 dark:text-slate-400"
            key={Math.random()}
          >
            {" "}
            {el.textContent}
          </section>
        ))}
      </aside>
    </section>
  );
};

//description parsing functions

export default JobBody;
