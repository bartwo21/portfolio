export type GithubRepoData = {
  name: string;
  description: string;
  topics: string[];
  html_url: string;
};

export type PinnedData = {
  name: string;
  description: string;
  topics: string[];
  html_url: string;
  live_url: string;
  img: string;
};

export type ExperienceData = {
  title: string;
  company: string;
  date: string;
  description: string;
};

export async function fetchAllGithubRepos() {
  try {
    const githubApi = process.env.NEXT_PUBLIC_PUBLICAPI_KEY;
    const response = await fetch(githubApi as string);
    // console.log("is Server: ", typeof window === "undefined");
    const data = await response.json();
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
    title: "Freelance Frontend Developer",
    company: "Gise.com",
    date: "24/02/2024 - 30/03/2024",
    description:
      "I revamped the frontend of a website using React and TypeScript. The enhancements include an engaging homepage, detailed ticket pages, seat selection with special pricing, event search, blog sections, user operations, and a profile page. Additionally, I integrated bus and plane ticket searches, seat selection, and dedicated payment pages. I made all connections using REST APIs.",
  },
  {
    title: "Intern Frontend Developer",
    company: "Teknodev",
    date: "17/05/2023 - 20/09/2023",
    description:
      "In my 4-month Frontend Development Internship at Teknodev, I gained hands-on experience with React, TypeScript, Redux, Tailwind CSS and SASS. Collaborating in a diverse team, I honed Git skills for version control, improving my adaptability in an agile development setting with a focus on clear communication and teamwork.",
  },
];

export const projectData: PinnedData[] = [
  {
    name: "tour-page",
    description: "Interactive React-based travel platform.",
    topics: ["react", "redux", "typescript", "scss", "react-router-v6"],
    html_url: "https://github.com/bartwo21/tour-project",
    live_url: "https://bartutourproject.netlify.app/",
    img: "/tour.webp",
  },
  {
    name: "seat-charts",
    description: "Bus and default seating charts",
    topics: ["react", "typescript", "rsuite", "react-icons"],
    html_url: "https://github.com/bartwo21/seat-charts",
    live_url: "https://seat-charts.vercel.app/",
    img: "/seat.webp",
  },
  {
    name: "mern-chat-app",
    description:
      "Real-time chat app with React, Express, MongoDB, and WebSocket.",
    topics: ["react", "mongodb", "mongoose", "expressjs", "tailwindcss"],
    html_url: "https://github.com/bartwo21/chat-app",
    live_url:
      "https://6656431bad64be895fc5ef59--dainty-fox-59bf9e.netlify.app/",
    img: "/chat.webp",
  },
];
