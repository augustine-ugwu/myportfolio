import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  mercado,
  freelancer,
  aptech,
  pollcraft,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UI | UX Designer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Aptech",
    icon: aptech,
    iconBg: "#E6DEDD",
    date: "Sept 2018 - Aug 2019",
    points: [
      "Developed user interfaces with modern JavaScript frameworks, HTML5 and CSS3.",
      "Prioritized and problem-solved several tasks concurrently with minimum supervision.",
      "Documented project changes in team manuals for future reference and use.",
    ],
  },
  {
    title: "React Js Developer",
    company_name: "Mercado",
    icon: mercado,
    iconBg: "#E6DEDD",
    date: "Nov 2019 - Aug 2022",
    points: [
      "Proactively liased with the design team and project manager to ensure efficiency and timely delivery of significant projects.",
      "Formulated and implemented improvements on cleanup processes and performance, minimizing downtime by 10%.",
      "Diagnosed and troubleshoot different websites of the company’s critical clients by deploying updated knowledge of modern technologies.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Pollcraft",
    icon: pollcraft,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Feb 2023",
    points: [
      "Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.",
      "Followed SDLC best practices within Agile environment to produce rapid iterations for voters.",
      "Tested web-based product functionality and delivered iterations to voters.",
      "Researched emerging web technologies and trends for possible incorporation into site.",
    ],
  },
  {
    title: "Frontend-developer",
    company_name: "Freelance",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I believed creating a website as stunning as our product was unachievable, yet he proved my assumption incorrect.",
    name: "Uzor Emmanuel",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "In all my encounters with web developers, none have shown genuine concern for their clients' success like he does.",
    name: "Jibril Yusuf",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Our website's optimization led by him resulted in a  50% surge in traffic. Gratitude isn't enough for his invaluable contribution!",
    name: "Martins Uche",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mercado",
    description:
      "A company that helps organizations and small businesses attract, convert and nurture appropriate audiences using the digital space.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Email js",
        color: "green-text-gradient",
      },
      {
        name: "chakra UI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://mdca.vercel.app/",
  },
  {
    name: "Ship & Shore",
    description:
      "Web-based platform that provides and charter vessels for the coastal transportation of petroleum products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://shipandshoreng.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
