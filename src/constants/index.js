// Technical skills
import html from "../assets/tech/html.svg";
import css from "../assets/tech/css.svg";
import javascript from "../assets/tech/javascript.svg";
import bootstrap from "../assets/tech/bootstrap.svg";
//import tailwind from "../assets/tech/tailwindcss.svg";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import git from "../assets/tech/git.png";
//import figma from "../assets/tech/figma.png";


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
        name: "bootstrap",
        icon: bootstrap,
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
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },

    {
        name: "git",
        icon: git,
    },
];

const educationalQualification = [
    {
        title: "MERN Stack Development",
        company_name: "GUVI Geeks Network",
        date: "October 2022 - present",
        points: [
            "I have experience in developing web applications using React.js and MERN technologies, including MongoDB, Express.js, and Node.js",
            "I am proficient in implementing responsive design and ensuring cross-browser compatibility",
            "My skills and expertise enable me to build user-friendly and high-performing web applications"
        ],
    },
    {
        title: "Bachelor of Science in Mathematics with Computer Applications",
        company_name: "Lady Doak College",
        // iconBg: "#16213e",
        date: "June 2019 - May 2022",
        points: [
            "Studied advanced mathematics and Computer Programming",
            "Developed strong analytical and problem-solving skills through projects and assignments",
            "Participated in math related competitions and tech-related workshops for additional learning and skill enhancement"
        ],
    },
    {
        title: "HSC",
        company_name: "Good Shepherd Matriculation Higher Secondary School",
        date: "june 2018 - march 2019",
        points: [
            "Completed Higher Secondary education with a focus on Biology, Physics, Chemistry and Mathematics",
            "Actively participated in extracurricular activities such as sports and cultural events",
            "Developed time management, teamwork, and communication skills through group projects and assignments"
        ],
    },
];

export {
    technologies,
    educationalQualification,
};
