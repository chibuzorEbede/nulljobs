import React from "react";
import ListTile from "./list-tile";
import Button from "./shared/button";

const List = ({ data }) => {
  return (
    <>
      <main className="p-5 pt-12 flex gap-12 flex-col md:grid md:grid-cols-2 lg:grid-cols-3">
        {data.map((jobItem) => (
          <ListTile key={jobItem.guid} data={jobItem} />
        ))}
      </main>
      <aside className=" text-center pb-12">
        <Button text={`load more`} />
      </aside>
    </>
  );
};

export default List;
