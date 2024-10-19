import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Branding from "./branding";

const Layout = ({ children }) => {
  return (
    <div className=" bg-slate-50 dark:bg-slate-950 ">
      {children}
      {/* <Analytics /> */}
      <Branding />
    </div>
  );
};

export default Layout;
