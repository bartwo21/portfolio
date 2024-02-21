import React from "react";
import { GithubRepoData, fetchAllGithubRepos } from "../../lib/data";
import "./projects.css";
import Githuballrepos from "../githuballrepos";

const ProjectsContainer: React.FC = async () => {
  const fetchData = (await fetchAllGithubRepos()) as GithubRepoData[];
  //The reason I did this is because the Tilt component is written with a class component, so it cannot be rendered on the server.
  return <Githuballrepos fetchData={fetchData} />;
};

export default ProjectsContainer;
