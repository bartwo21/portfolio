import React, { Suspense } from "react";
import ProjectsContainer from "../components/projects/projects";
import Loading from "./loading";

const Page = ({}) => {
  return (
    <div className="flex flex-col md:w-1/2 w-4/5 lg:mt-36 mt-12">
      <h1 className="text-xl text-sky-50 text-center mb-4">All Repositories</h1>
      <Suspense fallback={<Loading />}>
        <ProjectsContainer />
      </Suspense>
    </div>
  );
};

export default Page;
