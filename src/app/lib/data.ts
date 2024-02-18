export type GithubRepoData = {
  name: string;
  description: string;
  topics: string[];
  html_url: string;
  live_url: string;
  img?: string;
};

export async function fetchGetAllGithubRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/bartwo21/repos`);
    let data = await response.json();
    const reposInfos = data?.map((repo: GithubRepoData) => {
      return {
        name: repo.name,
        description: repo.description,
        topics: repo.topics,
        html_url: repo.html_url,
      };
    });
    return reposInfos;
  } catch (error) {
    console.error(error);
  }
}

export const projectData: GithubRepoData[] = [
  {
    name: "tour-page",
    description: "Interactive React-based travel platform.",
    topics: ["react", "redux", "typescript", "scss", "react-router-v6"],
    html_url: "https://github.com/bartwo21/tour-project",
    live_url: "https://bartutourproject.netlify.app/",
    img: "/tour.png",
  },
  {
    name: "weather-app",
    description: "Weather app with React and TypeScript.",
    topics: ["react", "typescript", "axios"],
    html_url: "https://github.com/bartwo21/weather-app-react",
    live_url:
      "https://648d09f5cc1ae5322316a12e--unrivaled-cactus-3ec579.netlify.app/",
    img: "/weather.png",
  },
  {
    name: "next-learn",
    description: "A project developed alongside the Next.js documentation.",
    topics: ["nextjs", "react", "typescript", "tailwindcss", "vercel-postgres"],
    html_url: "https://github.com/bartwo21/next-learn",
    live_url: "https://next-learn-two-theta.vercel.app/dashboard",
    img: "/next.png",
  },
];
