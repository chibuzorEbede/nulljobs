import React, { useEffect, useState } from "react";
import ListTile from "./list-tile";
import Button from "./shared/button";
import axios from "axios";

const List = ({ data }) => {
  const [loadMoreData, setLoadMoreData] = useState(data);

  const loadMoreJobs = () => {
    //base urls
    const localUrl = `http://localhost:8000/get-more`;
    const liveUrl = `https://apps.chibuzor.online/get-more`;

    /*
    TODO
    call the api to generate more data and set as the current data value
    */
    axios
      .get(localUrl)
      .then((response) => setLoadMoreData(loadMoreData.concat(response.data)))
      .catch((err) => console.log(err));
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
