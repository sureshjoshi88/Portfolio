import mainImg from "../constants/images/sawan.png";
import pmImg from "../constants/images/pm-project.png";
import raoEshop from "../constants/images/rao_eshop.png";
import portfilioIMg from "../constants/images/portfilio.png";
import dvgImg from "../constants/images/dvg.png";

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Sawan Kumar Yadav",
    role: "Frontend Developer",
    phone: "+91 9636447793",
    email: "savanyadav377@gmail.com",
    address: "Vill. Bhojyara Th. Chaksu, Jaipur (Raj) 303903",
    experienceYears: "2+",
    aboutText: "I am a frontend developer specializing in HTML5, CSS3, Bootstrap 5, and Tailwind CSS for creating modern, responsive web designs. I am proficient in JavaScript and React.js, developing dynamic and interactive user interfaces. Currently, I am advancing my skills by working with the MERN Stack. Over the past months, I have been actively contributing to React-based projects, gaining valuable hands-on experience in building scalable enterprise applications."
  },
  socialLinks: [
    { icon: "fa-brands fa-github", url: "https://github.com/raosavan96" },
    { icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/in/savan-yadav-47607a272/" },
    { icon: "fa-brands fa-whatsapp", url: "https://wa.me/9636447793" },
  ],
  skills: [
    // Core & Frameworks
    { name: "Next.js", icon: "bx bx-code-alt" },
    { name: "ReactJs", icon: "fa-brands fa-react" },
    { name: "React Native", icon: "fa-brands fa-react" },
    { name: "TypeScript", icon: "bx bxl-typescript" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "NodeJs", icon: "fa-brands fa-node" },
    
    // State Management & Data Fetching
    { name: "Redux Toolkit", icon: "bx bx-data" },
    { name: "Context API", icon: "bx bx-network-chart" },
    { name: "TanStack", icon: "bx bx-layer" },
    
    // Databases & Tools
    { name: "PostgreSQL", icon: "bx bxl-postgresql" },
    { name: "Mongo DB", icon: "cib-mongodb" },
    { name: "DataTables", icon: "bx bx-table" },
    { name: "GIS Maps", icon: "bx bx-map-alt" },
    
    // UI & Styling
    { name: "Tailwind CSS", icon: "bx bxl-tailwind-css" },
    { name: "Shadcn UI", icon: "bx bx-layout" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
    { name: "HTML5", icon: "fa-brands fa-html5" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt" },
  ],
  experience: [
    {
      year: "June 2024 - Present", 
      role: "Mern Stack Developer",
      company: "Book Tech Labs"
    },
    {
      year: "June 2023 - June 2024",
      role: "Frontend Developer",
      company: "DVG Soft"
    }
  ],
  projects: [
    {
      id: "01",
      title: "Endureva PM",
      desc: "A full-featured project management application developed using React.js, Redux, Context API, and Tailwind CSS. Facilitates efficient project tracking, task management, and role-based access control.",
      tech: "React Js, Tailwind, Redux, Node.js",
      img: pmImg,
      liveUrl: "https://pm.endurevadev.online/",
      githubUrl: null
    },
    {
      id: "02",
      title: "Rao_e_shop",
      desc: "A full-stack MERN e-commerce web application designed for seamless shopping and efficient admin management, featuring user authentication, cart functionality, and product filtering.",
      tech: "MERN Stack, Redux Toolkit, Tailwind CSS",
      img: raoEshop,
      liveUrl: "https://rao-e-shop.vercel.app/",
      githubUrl: null
    },
    {
      id: "03",
      title: "My Portfolio",
      desc: "Dynamic single-page web application using React.js, Tailwind CSS, and optimized component architecture.",
      tech: "React Js, Tailwind, JavaScript",
      img: portfilioIMg,
      liveUrl: "https://new-portfolio-xi-navy.vercel.app/",
      githubUrl: "https://github.com/raosavan96/New-Portfolio.git"
    }
  ]
};