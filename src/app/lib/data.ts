import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSass,
  SiJira,
  SiShadcnui,
  SiHtml5,
  SiCss3,
  SiTrello,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";

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

export type JourneyItem = {
  year: string;
  title: string;
  description: string;
  highlights?: string[];
};

export const journeyData: JourneyItem[] = [
  {
    year: "2024",
    title: "Frontend Developer at Robosme",
    description:
      "After graduating, immediately started my professional career as a Frontend Developer, focusing on modernizing CRM platform and developing new features.",
  },
  {
    year: "2023",
    title: "Multiple Growth Paths",
    description:
      "Completed Frontend Developer internship at Teknodev, started Computer Programming associate degree, and developed various side projects. /",
    highlights: ["Team Collaboration", "Frontend Development"],
  },
  {
    year: "2022",
    title: "Frontend Development Focus",
    description:
      "Made a decisive shift towards web technologies, with a specific focus on frontend development. /",
    highlights: ["Web Technologies"],
  },
  {
    year: "2020",
    title: "University Journey Begins",
    description:
      "Started Mathematics and Computer Science at Eskişehir Osmangazi University. Integrated mathematics and software development, enhancing theoretical thinking. /",
    highlights: ["Software Principles"],
  },
];

export type WorkspaceItem = {
  title: string;
  items: Array<{
    name: string;
    link?: string;
  }>;
};

export const workspaceData: WorkspaceItem[] = [
  {
    title: "Development Setup",
    items: [
      {
        name: "PC - Lenovo Ideapad Gaming 3",
        link: "https://www.hepsiburada.com/lenovo-ideapad-gaming-3-intel-core-i5-12450h-16gb-512gb-ssd-rtx3050-freedos-15-6-ips-tasinabilir-bilgisayar-82s9015vtx-p-HBCV00004MP2D1?wt_gl=cpc.dsa.camp10778897643adgr138021457650&gad_source=1&gclid=CjwKCAiAiOa9BhBqEiwABCdG83_GwKNwNt2L50Fsck8Kt3IWg-Ou8MCU2d0j4Z_3T7zRLD_Mh1TYMRoCUMoQAvD_BwE",
      },
      {
        name: 'Monitor - LENOVO G24-20"',
        link: "https://www.trendyol.com/lenovo/g24-20-23-8-0-5ms-144hz-hdmi-display-amd-freesync-premium-wled-ips-gaming-monitor-66cfgac1tk-p-338525071?merchantId=106934",
      },
      {
        name: "Keyboard - YUNZII YZ87",
        link: "https://wraithesports.com/products/yunzii-yz87-mekanik-klavye",
      },
      {
        name: "Mouse - Logitech G305",
        link: "https://www.amazon.com.tr/Logitech-LIGHTSPEED-Kablosuz-Programlanabilir-Bildirim/dp/B07CGPZ3ZQ/ref=sr_1_1?adgrpid=122519971360&dib=eyJ2IjoiMSJ9.Wb4b9Db3sFBjfqUH0QxAmzASyqnVQ-JmGZzm0Z_AWOzmpUenkJP2XBL5av7b0v1u6nHh_ZYOYes0AfDHx4eZbgyt7oRKMsKeYrEC71x7CcgXPEsem8Hm2tsw_PZhl-rW0YyZ5EZCU9bNmZH2Z9cqTqFaMHxQqiyFlauRagQS1KFGHiBtZrmYlChNRpccEYdKZVhaoCwcYZOrLomTXa1RUUw0q0ETPONVZxg2l1ayu4jjraF0fHltnaGoVYVM9wT_3ky36xT4v_5DHbdpauZuls0KETibMsIvHNP6oaJxrNYvlzZrtIbjXIQ_nf5IOitUyra-yEuf2S-1EQ2gHJUqq2_JefkDnx6BohF3BPyUBsZWaQm6AVAahbVKey3idPNeD-VnKQzu8g91MTgtNMDNj9UyjfI580be80Xbrz7R4KOi4KvOLUus_QRXKRptrfa9.7qcQRXusEmsrWvX2mimSFRjlK8k-tJ3uTtV-tvxLaq0&dib_tag=se&hvadid=509781013651&hvdev=c&hvlocphy=9197799&hvnetw=g&hvqmt=e&hvrand=13619427159432842012&hvtargid=kwd-302579837738&hydadcr=5565_2236775&keywords=logitech%2Bg305&mcid=fc632e6e1eea3e18af6d80a189fb0074&qid=1740260233&sr=8-1&th=1",
      },
      {
        name: "Home Mesh Wi-Fi System - TP-Link DECO S7",
        link: "https://www.amazon.com.tr/dp/B09K6D67NB?ref=ppx_yo2ov_dt_b_fed_asin_title",
      },
      {
        name: "Table - Ikea TROTTEN",
        link: "https://www.ikea.com.tr/urun/trotten-beyaz-120x70-cm-yuksekligi-ayarlanabilen-calisma-masasi-99429578",
      },
    ],
  },
  {
    title: "Software & Tools",
    items: [{ name: "📝 Cursor as Main Editor" }],
  },
];

export type TechStackItem = {
  name: string;
  icon: React.ElementType;
  color: string;
};

export const techStackData = {
  mainTech: [
    { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  ],
  styling: [
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "SASS", icon: SiSass, color: "text-pink-500" },
    { name: "shadcn/ui", icon: SiShadcnui, color: "text-gray-200" },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "REST API", icon: TbApi, color: "text-orange-400" },
  ],
  tools: [
    { name: "Redux", icon: SiRedux, color: "text-purple-500" },
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "Azure DevOps", icon: VscAzureDevops, color: "text-blue-500" },
    { name: "JIRA", icon: SiJira, color: "text-blue-400" },
    { name: "Trello", icon: SiTrello, color: "text-sky-500" },
  ],
};
