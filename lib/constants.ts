export const SITE_CONFIG = {
    name: "Himanshu Wandhare",
    title: "Creative Developer & Designer",
    description:
        "Portfolio showcasing my work as a creative developer and designer with a focus on interactive experiences.",
    socials: {
        github: "https://github.com/himanshu-wandhare",
        // twitter: "https://twitter.com",
        linkedin: "https://www.linkedin.com/in/himanshu-wandhare-253107216",
        instagram: "https://instagram.com/himanshu_wandhare",
    },
};

export const PROJECTS = [
    {
        id: "project-1",
        title: "PrepWise – AI-Powered Job Interview Preparation Platform",
        description:
            "A powerful AI-driven platform designed to help you master job interviews with confidence. Conduct mock interviews with a smart voice assistant, receive real-time feedback, and track your progress — all in one seamless experience.",
        image: "/prepwise.png",
        tags: [
            "Next.js",
            "Firebase",
            "Vapi AI",
            "Google Gemini",
            "Zod",
            "Tailwind CSS",
            "Shadcn",
        ],
        links: {
            live: "https://prep-wise-coral-psi.vercel.app",
            github: "https://github.com/Nitinkushwaha19/PrepWise",
        },
    },
    {
        id: "project-2",
        title: "CarePulse - Healtcare Application",
        description:
            "A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js.",
        image: "/carepulse.png",
        tags: ["Next.js", "Tailwind CSS", "Appwrite", "Twilio"],
        links: {
            live: "https://healthcare-carepluse.vercel.app/",
            github: "https://github.com/himanshu-wandhare/healthcare_carepluse",
        },
    },
    {
        id: "project-3",
        title: "E-commerce Store",
        description:
            "E-commerce web application build with Next.js which allows search and buy products. Integreted Stripe payment getaway for smooter payment experience.",
        image: "/ecommerce.png",
        tags: ["Next.js", "Tailwind CSS", "Stripe", "Prisma ORM"],
        links: {
            live: "https://github.com/himanshu-wandhare/e-commerce-site",
            github: "https://github.com/himanshu-wandhare/e-commerce-site",
        },
    },
    {
        id: "project-4",
        title: "Video Streaming Application",
        description:
            "A live video streaming application created using React.js & Redux.js.",
        image: "https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tags: ["React.js", "Redux", "JSON Server", "RTMP"],
        links: {
            live: "https://github.com/himanshu-wandhare/Streamer",
            github: "https://github.com/himanshu-wandhare/Streamer",
        },
    },
];

export const SKILLS = {
    languages: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Java", level: 75 },
        { name: "Python", level: 70 },
        { name: "Dart", level: 60 },
        { name: "HTML/CSS", level: 95 },
    ],
    frameworks: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 75 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "Flutter", level: 50 },
    ],
    databases: [
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "Oracle", level: 65 },
    ],
    tools: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 90 },
        // { name: "AWS", level: 65 },
    ],
};

export const EXPERIENCE = [
    {
        company: "Mertiest Solutions Pvt. Ltd.",
        position: "Fullstack Development Intern",
        period: "August 2023 - January 2024",
        description: "Wroked on a Vendor Management System web application.",
        highlights: [
            "Build reusable components using Vue.js.",
            "Integrated front-end components with Laravel functionalities.",
            "Collaborated with cross-functional teams to deliver high-quality solutions.",
        ],
    },
    // {
    //     company: "Digital Dreams Agency",
    //     position: "UI/UX Developer",
    //     period: "2020 - 2022",
    //     description:
    //         "Created engaging user interfaces and experiences for various client projects.",
    //     highlights: [
    //         "Designed and developed 20+ client websites",
    //         "Increased user engagement by 60%",
    //         "Led the adoption of modern frontend practices",
    //     ],
    // },
    // {
    //     company: "Startup Innovations",
    //     position: "Frontend Developer",
    //     period: "2018 - 2020",
    //     description:
    //         "Developed responsive web applications and maintained client relationships.",
    //     highlights: [
    //         "Built 3 successful SaaS products",
    //         "Implemented responsive design systems",
    //         "Collaborated with cross-functional teams",
    //     ],
    // },
];

export const CERTIFICATIONS = [
    {
        name: "Vue - The Complete Guide (incl. Router & Composition API)",
        issuer: "Udemy",
        date: "Oct, 2023",
        image: "https://img-c.udemycdn.com/course/240x135/995016_ebf4_3.jpg",
    },
    {
        name: "Typescript: The Complete Developer's Guide",
        issuer: "Udemy",
        date: "Jan, 2024",
        image: "https://img-c.udemycdn.com/course/240x135/2337318_abfd_5.jpg",
    },
    {
        name: "Next.js 15 & React - The Complete Guide",
        issuer: "Udemy",
        date: "Ongoing",
        image: "https://img-c.udemycdn.com/course/240x135/3873464_403c_3.jpg",
    },
];
