import React, { useEffect, useState } from "react";
import ListTile from "./list-tile";
import Button from "./shared/button";
import axios from "axios";

const List = ({ data }) => {
  const [loadMoreData, setLoadMoreData] = useState(data);

  const loadMoreJobs = () => {
    const localUrl = `http://localhost:3002/get-more`;
    const liveUrl = `https://e1da64a0-e051-4459-a7d7-fecf8bbe0557-00-bwc9ui1rn0v4.spock.replit.dev/get-more`;

    axios
      .get(liveUrl)
      .then((response) => setLoadMoreData(loadMoreData.concat(response.data)))
      .catch((err) => console.log(err));

    /*
    TODO
    call the api to generate more data and set as the current data value
    */
  };

  return (
    <>
      <main className="p-5 pt-12 flex gap-12 flex-col md:grid md:grid-cols-2 lg:grid-cols-3">
        {loadMoreData.map((jobItem) => (
          <ListTile key={jobItem.guid} data={jobItem} />
        ))}
      </main>
      <aside className=" text-center pb-12">
        <Button text={`load more`} clickHandler={() => loadMoreJobs()} />
      </aside>
    </>
  );
};

export default List;
