import React, { Suspense } from "react";
import ProjectsContainer from "../components/projects";
import Loading from "./loading";

const Page = ({}) => {
  return (
    <div className="flex flex-col gap-10 mt-28">
      <Suspense fallback={<Loading />}>{<ProjectsContainer />}</Suspense>
    </div>
  );
};

export default Page;
