import pmImg from "../constants/images/pm-system.png";
import salon from "../constants/images/salon.png";
import school from "../constants/images/school.png";
// import dvgImg from "../constants/images/dvg.png";

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Suresh Joshi",
    role: "MERN Stack Developer",
    phone: "+91 8824365208",
    email: "joshisuresh123u@gmail.com",
    address: "dudu, Jaipur (Raj) 303008",
    experienceYears: "1+",
    aboutText: "Full Stack MERN Developer with 1 year of experience in frontend and backend development using React.js, Node.js, Express.js, and MongoDB. Skilled in building responsive UI, REST APIs, authentication, RBAC, CRUD operations, state management with  Redux, and database management. Experienced with Tailwind CSS, TanStack Query, and reusable component architecture. Strong  understanding of full-stack web application development, performance optimization, and clean code practices."
  },
  socialLinks: [
    { icon: "fa-brands fa-github", url: "https://github.com/sureshjoshi88" },
    { icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/in/suresh-joshi-17a886314/" },
    { icon: "fa-brands fa-whatsapp", url: "https://wa.me/8824365208" },
  ],
  skills: [
    // Core & Frameworks
    // { name: "Next.js", icon: "bx bx-code-alt" },
    { name: "ReactJs", icon: "fa-brands fa-react" },
    // { name: "React Native", icon: "fa-brands fa-react" },
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
    // { name: "GIS Maps", icon: "bx bx-map-alt" },

    // UI & Styling
    { name: "Tailwind CSS", icon: "bx bxl-tailwind-css" },
    { name: "Shadcn UI", icon: "bx bx-layout" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
    { name: "HTML5", icon: "fa-brands fa-html5" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt" },
  ],
  experience: [
    {
      year: "January 2026 - Present",
      role: "MERN Stack Developer",
      company: "DVG Soft"
    },
    {
      year: "july 2025 - December 2025",
      role: "Frontend Developer",
      company: "RNS It Solution"
    }
  ],
  projects: [
    {
      id: "01",
      title: "PM System (project management)",
      desc: "Built a responsive and scalable web app using React.js, shadcn/ ui, and TanStack Query. eveloped reusable components and dynamic tables for projects, tasks, and user management. mplemented RBAC, authentication, and protected routes for secure access. ntegrated RESTful APIs, CRUD operations, and server-state caching for efficient data handling. mproved performance, validation, and overall user experience with clean architecture.",
      tech: "React Js, Tailwind, ShadeCN Redux, TanStack Query,  Node.js, Express.js, Socket.io, FCM, PostgreSQL",
      img: pmImg,
      liveUrl: "https://projects.endureva.cloud/",
      githubUrl: null
    },
    {
      id: "02",
      title: "SalonSphere – Role-Based Salon Management System (Frontend)",
      desc: "Developed a scalable multi-tenant salon management platform using React.js, Redux Toolkit, and Tailwind CSS. Implemented Role-Based Access Control (RBAC) with separate dashboards for Super Admin, Salon Owner, and Customers. Built JWT authentication, protected routes, and dynamic permission-based UI rendering. Enabled Super Admin to manage salon owners, while salon owners could manage services, bookings, staff, and customer data. Integrated RESTful APIs for CRUD operations, real-time state management, and seamless frontend-backend communication. Created reusable and responsive UI components to improve scalability and maintainability. Improved user experience with form validation, error handling, loading states, and optimized performance. Short Version (Resume Friendly) SalonSphere – Salon Management System Built a role-based salon management platform using React.js, Redux Toolkit, and Tailwind CSS. Implemented JWT authentication, RBAC, protected routes, and multi-role dashboards. Integrated REST APIs for salon, service, booking, and customer management. Developed reusable responsive components with optimized UX and state management. Thoda Advanced & Premium Version (Portfolio/LinkedIn) SalonHub Pro – Multi-Tenant Salon SaaS Platform Engineered a modern B2B salon management SaaS frontend where Super Admins manage salon businesses and salon owners manage daily operations. Developed secure authentication and authorization flows using JWT and role-based routing. Designed dashboards for salon analytics, service management, customer handling, and appointment workflows. Built modular reusable architecture using React.js, Redux Toolkit, and Tailwind CSS for better scalability. Optimized application performance and responsiveness across devices with efficient state handling and lazy rendering techniques. Tech Stack Section Tech Stack: React.js, Redux Toolkit, Tailwind CSS, JavaScript, REST API, JWT Authentication, RBAC, Responsive Design, CRUD Operations, React Router DOM Ye project kaafi strong lag raha hai dost, especially kyuki isme: RBAC Multi-role system JWT auth CRUD Dashboard SaaS/B2B concept ye sab industry-level features hain 👍",
      tech: "React.js, Redux Toolkit, Tailwind CSS",
      img: salon,
      liveUrl: "https://salon-web-self.vercel.app/",
      githubUrl: null
    },
    {
      id: "03",
      title: "School Management System (Backend)",
      desc: "Developed a secure and scalable backend using Node.js and Express.js to manage students, teachers, and records.  Implemented JWT authentication and RBAC authorization for role-based access control.  Designed MongoDB schemas and relationships for structured data management.  Built RESTful APIs with CRUD operations, validation, and business logic. Ensured security, performance optimization, and API testing using Postman and Git/ GitHub..",
      tech: " Node.js, Express.js, Socket.io, MongoDB",
      img: school,
      liveUrl: "https://adminv2-dev.intellix360.in/",
      githubUrl: null
    }
  ]
};