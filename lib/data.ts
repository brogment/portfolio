import capstoneImg from "@/public/class_diagram.png";
import playlistImg from "@/public/missing_textures.png";
import mapImg from "@/public/missing_textures.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const projectsData = [
  {
    title: "Travel Planner",
    description:
      "My degree capstone project, a mobile app that allows users to log their travel plans, set reminders, and share their plans with others. Acted as designer, developer, and tester. ",
    tags: ["Java", "XML", "Room", "JUnit"],
    imageUrl: capstoneImg,
  },
  {
    title: "Playlist Finder",
    description:
      "Chrome extension that opens the playlists a youtube video is contained within with the click of a button. Features a Node.js back-end for security.",
    tags: ["JavaScript", "HTML/CSS", "Node.js"],
    imageUrl: playlistImg,
  },
  {
    title: "World Map",
    description:
      "Single page web-app that manipulates an SVG map of the word to display information about a country on mouseover.",
    tags: ["Angular"],
    imageUrl: mapImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Angular",
  "Git",
  "Tailwind",
  "Framer Motion",
  "SQL",
  "Python",
  "Java",
  "Spring Boot",
] as const;