// Enter all your detials in this file

// Profile Image
import profile from "./assets/profile.jpg";

// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";

// Project Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";

// Enter your Personal Details here
export const personalDetails = {
  name: "Viktorija Špan",
  tagline: "I build things for web",
  img: profile,
  about: `I'm a front-end developer with a focus on building clean, responsive, and visually 
  polished interfaces. I enjoy creating layouts that look exactly as intended and solving 
  logical challenges along the way. After completing intensive training in JavaScript and 
  React, I'm now looking for my first professional role where I can keep learning, contribute 
  to real projects, and grow as a developer.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/viktorija-span",
  github: "https://www.github.com/vikspan",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "JavaScript Developer",
    Company: "Coders Lab",
    Location: "Online",
    Type: "Full Time / Certificate",
    Duration: "2025",
    Link: "/assets/coderslab-certificate.pdf"
  },
  {
    Position: "CS50x - Introduction to Computer Science",
    Company: "Harvard University",
    Location: "Online",
    Type: "Ongoing / Self-Paced",
    Duration: "2025 - Present",
    Link: "https://cs50.harvard.edu/x/"
  },
  {
    Position: "Web Foundations & Improved Styling with CSS",
    Company: "Codecademy",
    Location: "Online",
    Type: "Self-Paced",
    Duration: "2024",
    Link: "https://www.codecademy.com/"
  },
  {
    Position: "Bachelor's in English",
    Company: "University of Ljubljana",
    Location: "Ljubljana, Slovenia",
    Type: "Full Time",
    Duration: "2019"
  },
  {
    Position: "Bachelor's in Art History",
    Company: "University of Ljubljana",
    Location: "Ljubljana, Slovenia",
    Type: "Full Time",
    Duration: "2019"
  }
];


// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Custom Coding Color Theme",
    image: projectImage1,
    description: `A React + Vite app I designed and built to make customizing VS Code 
    color themes easy and fun. It lets you live-edit syntax colors for HTML, CSS, and JS, 
    preview changes instantly, and export matching VS Code rules. Minimal, elegant UI 
    and fully my concept, design, and implementation.`,
    techstack: "HTML, Sass, JS, React, Vite",
    previewLink: "https://vikspan.github.io/custom-coding-color-theme",
    githubLink: "https://github.com/vikspan/custom-coding-color-theme",
  },
  {
    title: "CL Portfolio Project",
    image: projectImage2,
    description: `A React-based developer portfolio site built as part of the Coders Lab 
    JavaScript Developer course. It fetches project data from a mock API and features 
    a responsive layout I completed and refined independently.`,
    techstack: "HTML, Sass, JS, React",
    previewLink: "https://vikspan.github.io/CL_Portfolio_Project",
    githubLink: "https://github.com/vikspan/CL_Portfolio_Project",
  },
  {
    title: "CL BestShop",
    image: projectImage3,
    description: `A responsive online shop layout built from a course-provided design. 
    The project focuses on mastering layout and using Sass. It includes a 
    custom JavaScript price calculator with dynamic updates and form validation.`,
    techstack: "HTML, Sass, JS",
    previewLink: "https://vikspan.github.io/CL_BestShop_RWD",
    githubLink: "https://github.com/vikspan/CL_BestShop_RWD",
  },
  {
    title: "CL Weather Widget",
    image: projectImage4,
    description: `A React-based weather widget built during the Coders Lab JavaScript 
    course. I later improved it by fixing the layout and adding multi-city weather 
    switching. It displays weather data from a local file and has a dynamic UI.`,
    techstack: "HTML, Sass, JS, React",
    previewLink: "https://vikspan.github.io/CL_WeatherApp",
    githubLink: "https://github.com/vikspan/CL_WeatherApp",
  }
];

// Enter your Contact Details here
export const contactDetails = {
  email: "viktorija.span@gmail.com",
  linkedin: "https://www.linkedin.com/in/viktorija-span"
};
