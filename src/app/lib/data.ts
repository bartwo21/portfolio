export type GithubRepoData = {
  name: string;
  description: string;
  topics: string[];
  html_url: string;
  live_url: string;
  img?: string;
};

export type ExperienceData = {
  title: string;
  company: string;
  date: string;
  description: string;
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

export const experienceData = [
  {
    title: "Intern Frontend Developer",
    company: "Teknodev",
    date: "17/05/2023 - 20/09/2023",
    description:
      "In my 4-month Frontend Development Internship at Teknodev, I gained hands-on experience with React, TypeScript, Redux, Tailwind CSS, SASS. Collaborating in a diverse team, I honed Git skills for version control, improving my adaptability in an agile development setting with a focus on clear communication and teamwork.",
  },
  {
    title: "Intern Frontend Developer",
    company: "lorem ipsum",
    date: "17/05/2023 - 20/09/2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quam eos quidem magnam optio amet minima voluptatum doloribus, cum deleniti doloremque similique nam molestias, enim sapiente error in. Et, laborum!",
  },
];

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
