import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import JobDetails from "./routes/job-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "job/:jobId",
    element: <JobDetails />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
