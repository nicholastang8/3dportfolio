import { meta, shopify, starbucks, tesla, sql, Fusion,AVA  } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    Angular,
    Java,
    PowerBI,
    Python,
    Cpp,
    Docker,
    TensorFlow
    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: Angular,
        name: "Angular.js",
        type: "Frontend",
    },
    {
        imageUrl: Java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: PowerBI,
        name: "PowerBI",
        type: "Data Visualization",
    },
    {
        imageUrl: Cpp,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: Docker,
        name: "Docker",
        type: "Development",
    },
    {
        imageUrl: Python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: TensorFlow,
        name: "TensorFlow",
        type: "AI",
    },
   
];

export const experiences = [
    {
        title: "Software Engineer (Intern)",
        company_name: "FusionETA",
        icon: Fusion,
        iconBg: "white",
        date: "Jul 2023 - Sep 2023",
        points: [
            "Skills in cloud services and architecture",
            "Visualized data to uncover insights",
            "Mastery of tools like Git to manage code versions and collaborate with others",
            "Communicated effectively with clients",
        ],
    },
    {
        title: "Fullstack Developer, DevOps Engineer (Intern)",
        company_name: "AVA Asia",
        icon: AVA,
        iconBg: "white",
        date: "Dec 2023 - Jun 2024",
        points: [
            "Understanding different stacks like cloud structure, Linux distributions, and Windows Server",
            "Utilizing specialized tools for task automation, such as continuous integration and deployment pipelines",
            "Developed software framework like Angular.js",
            "Intergrated API enables frontend-backend communication",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/nicholastang8',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/nicholas-tang-9b429626a',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];