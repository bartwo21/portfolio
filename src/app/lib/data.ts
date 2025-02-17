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
  dateWith: string;
  image: string;
  description: (string | string[])[];
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
    title: "Frontend Developer",
    company: "Robosme",
    date: "10/2024 - Present",
    dateWith: "Oct 2024 - Present",
    image: "/robokobi_logo.jpeg",
    description: [
      "Contributing to the modernization of CRM platform.",
      "Key responsibilities include:",
      [
        "Developing features using Javascript following the MVVM design pattern",
        "Redeveloping the entire project using React",
        "Maintaining robust front-end functionality",
      ],
      "Utilizing development tools:",
      [
        "Jira for task management",
        "Azure DevOps for CI/CD",
        "Git for version control",
      ],
      "Collaborating closely with designers and developers in an agile environment.",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    company: "Gise.com",
    date: "02/2024 - 03/2024",
    dateWith: "Feb 2024 - Mar 2024",
    image: "/gisecom_logo.png",
    description: [
      "Revamped the frontend of a website using React and TypeScript.",
      "Enhancements made:",
      [
        "Engaging homepage",
        "Detailed ticket pages",
        "Seat selection with special pricing",
        "Event search",
        "Blog sections",
        "User operations",
        "Profile page",
      ],
      "Integrated bus and plane ticket searches, seat selection, and dedicated payment pages.",
      "Established all connections using REST APIs.",
    ],
  },
  {
    title: "Intern Frontend Developer",
    company: "Teknodev",
    dateWith: "May 2023 - Sep 2023",
    date: "05/2023 - 09/2023",
    image: "/teknodev_logo.jpeg",
    description: [
      "Completed a 5-month Frontend Development Internship at Teknodev.",
      "Gained hands-on experience with:",
      ["React", "TypeScript", "Redux", "Tailwind CSS", "SCSS"],
      "Collaborated in a diverse team to:",
      [
        "Hone Git skills for version control",
        "Improve adaptability in an agile development setting",
        "Focus on clear communication and teamwork",
      ],
    ],
  },
];

export const projectData: PinnedData[] = [
  {
    name: "mockiew",
    description: "AI-powered interview platform.",
    topics: [
      "next.js  ",
      "mongodb  ",
      "vercel-ai-sdk  ",
      "shadcn/ui  ",
      "tailwindcss  ",
    ],
    html_url: "https://github.com/bartwo21/mockiew",
    live_url: "https://mockiew.vercel.app/",
    img: "/mockiew.webp",
  },
  {
    name: "tour-page",
    description: "Dynamic Full-Stack Tour Booking Platform.",
    topics: ["react  ", "redux  ", "typescript  ", "node.js  ", "mongodb"],
    html_url: "https://github.com/bartwo21/tour-project",
    live_url: "https://bartutourproject.netlify.app/",
    img: "/tour.webp",
  },
  {
    name: "seat-charts",
    description: "Seat selection components as an npm package.",
    topics: ["react  ", "typescript  ", "rsuite  ", "react-icons"],
    html_url: "https://github.com/bartwo21/seat-charts",
    live_url: "https://seat-charts.vercel.app/",
    img: "/seat.webp",
  },
  {
    name: "mern-chat-app",
    description: "Real-time chat app with MERN and WebSocket.",
    topics: [
      "react  ",
      "mongodb  ",
      "mongoose  ",
      "expressjs  ",
      "tailwindcss",
    ],
    html_url: "https://github.com/bartwo21/chat-app",
    live_url:
      "https://66574e31cd59f833c0111219--dainty-fox-59bf9e.netlify.app/",
    img: "/chat.webp",
  },
  {
    name: "blog-app",
    description: "Blog app with Next.js, Prisma and Kinde.",
    topics: ["next.js  ", "tailwindcss  ", "prisma  ", "postgres  ", "kinde"],
    html_url: "https://github.com/bartwo21/my-blog",
    live_url: "https://my-blog-wine-three.vercel.app/",
    img: "/blog.webp",
  },
];
