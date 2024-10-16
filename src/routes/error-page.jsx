import { useRouteError, Link } from "react-router-dom";
import AppBar from "../components/app-bar";

import React from "react";
import Button from "../components/shared/button";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <AppBar />
      <section className="p-8 shadow-sm m-4 md:text-center">
        <h1 className="pb-8 font-bold">
          Sorry, the page you are looking for does not exist.
        </h1>
        <Link to={`/`} className="">
          <Button text={`go back to home page`}>Go back to home</Button>
        </Link>
        <p className="pt-8 text-xs text-rose-800">
          {`Error: `} {error.statusText || error.message}
        </p>
      </section>
    </>
  );
};

export default ErrorPage;
