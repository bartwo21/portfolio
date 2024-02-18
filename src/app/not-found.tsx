import React from "react";

type Props = {};

const notFound = (props: Props) => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-6xl font-bold text-zinc-500 my-12">
        404 - Page Not Found
      </h1>
    </div>
  );
};

export default notFound;
