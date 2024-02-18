export type GithubRepoData = {
  name: string;
  description: string;
  topics: string[];
  html_url: string;
};
const projectNames = ["tour-project", "weather-app-react", "next-learn"];

export async function fetchGithubRepoData() {
  const responses = await Promise.all(
    projectNames.map(async (project) => {
      const response = await fetch(`${process.env.GITHUB_REPO_API}/${project}`);
      return response.json();
    })
  );

  return responses;
}

const allRepos = process.env.GITHUB_REPO_API_ALL;

export async function fetchGetAllGithubRepos() {
  if (!allRepos) {
    throw new Error("GITHUB_REPO_API_ALL is undefined");
  }

  const response = await fetch(allRepos);
  return response.json();
}

let datas = fetchGithubRepoData() as unknown as GithubRepoData[];

export default datas;
