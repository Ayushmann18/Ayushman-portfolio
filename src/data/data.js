// All facts below are sourced directly from Ayushman's resume, GitHub profile,
// and internship certificate. Links were checked against github.com/Ayushmann18
// before being added here — no invented repository URLs.

export const profile = {
  name: "Ayushman Kumar Choudhary",
  location: "Chennai, India",
  phone: "+91-6202034446",
  email: "ayushmaanchoudhary12@gmail.com",
  linkedin: "https://www.linkedin.com/in/ayushman-choudhary-x1",
  github: "https://github.com/Ayushmann18",
  leetcode: "https://leetcode.com/u/ayushmaanchoudhary12/",
  resumeFile: "/resume.pdf",
};

export const intro =
  "I'm a Computer Science and Engineering student at SRM Institute of Science & Technology, interested in software development, problem solving, and practical AI/ML applications. I enjoy building projects that turn ideas into working, useful software.";

export const about = `I'm a Computer Science and Engineering student at SRM Institute of Science & Technology with a strong interest in software development, problem solving, and practical AI/ML applications. I enjoy turning ideas into working software and understanding how the pieces fit together from the frontend and APIs to databases and intelligent features.

My projects include a full-stack e-commerce platform, an AI movie recommendation engine, and an NLP-based resume analyzer. Alongside building projects, I actively strengthen my Data Structures & Algorithms skills and continue learning through hands-on development and my project-based AI internship.`

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: "SiPython", color: "#3776AB" },
      { name: "C++", icon: "SiCplusplus", color: "#00599C" },
      { name: "SQL", icon: "TbSql", color: "#4479A1" },
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "C", icon: "SiC", color: "#A8B9CC" },
      { name: "HTML", icon: "SiHtml5", color: "#E34F26" },
      { name: "CSS", icon: "SiCss", color: "#1572B6" },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "React.js", icon: "SiReact", color: "#61DAFB" },
      { name: "Node.js", icon: "SiNodedotjs", color: "#5FA04E" },
      { name: "Express.js", icon: "SiExpress", color: "#E8E8E8" },
      { name: "Flask", icon: "SiFlask", color: "#E8E8E8" },
      { name: "REST APIs", icon: "TbApi", color: "#0E9A82" },
      { name: "Vite", icon: "SiVite", color: "#BD34FE" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
      { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
      { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
    ],
  },
  {
    category: "AI / Machine Learning",
    items: [
      { name: "Scikit-learn", icon: "SiScikitlearn", color: "#F7931E" },
      { name: "Pandas", icon: "SiPandas", color: "#8C9EFF" },
      { name: "NumPy", icon: "SiNumpy", color: "#4D9FCC" },
      { name: "NLP", icon: "TbBrain", color: "#0E9A82" },
      { name: "Recommendation Systems", icon: "TbSparkles", color: "#0E9A82" },
      { name: "Data Preprocessing", icon: "TbFilter", color: "#0E9A82" },
    ],
  },
  {
    category: "Developer Tools",
    items: [
      { name: "Git", icon: "SiGit", color: "#F05032" },
      { name: "GitHub", icon: "SiGithub", color: "#E8E8E8" },
      { name: "VS Code", icon: "VscVscode", color: "#007ACC" },
    ],
  },
  {
    category: "CS Fundamentals",
    items: [
      { name: "Data Structures & Algorithms" },
      { name: "OOPs" },
      { name: "DBMS" },
      { name: "Operating Systems" },
      { name: "Computer Networks" },
    ],
  },
];

export const experience = {
  role: "Artificial Intelligence Intern",
  company: "Skillbit Technologies",
  type: "Project-Based · Remote",
  period: "June 2026 – Present",
  status: "Project-Based · Remote",
  certificateFile: "/internship-certificate.pdf",
  points: [
    "Completed a project-based AI internship focused on applying software development and machine learning concepts to practical applications.",
    "Selected projects from an assigned portfolio and applied relevant technologies to practical problems.",
    "Applied full-stack development, REST APIs, database management, and machine learning concepts.",
  ],
};

export const projects = [
  {
    id: "shopverse",
    name: "ShopVerse",
    tagline: "Full-stack e-commerce platform",
    description:
      "A full-stack e-commerce web application with product browsing, cart management, checkout, and order tracking.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "JWT", "Cloudinary"],
    highlights: [
      "JWT authentication and protected REST APIs",
      "Cloudinary integration for product image management",
      "Razorpay payment workflows for secure order processing",
      "Product browsing, cart, checkout, and order tracking",
    ],
    architecture: ["React Frontend", "REST API", "Express / Node Backend", "MongoDB"],
    // No dedicated ShopVerse repository was found on Ayushman's GitHub profile,
    // so this links to the main profile rather than a guessed repo URL.
    github: "https://github.com/Ayushmann18",
    githubLabel: "GitHub Profile",
    demo: null,
    featured: true,
  },
  {
    id: "cinenova",
    name: "Cine Nova",
    tagline: "AI movie recommendation engine",
    description:
      "A full-stack movie recommendation web app using content-based filtering, with movie posters, ratings, release years, and genres pulled in through REST APIs.",
    stack: ["React.js", "Flask", "Python", "Scikit-learn", "REST APIs"],
    highlights: [
      "Content-based filtering recommendation model",
      "Flask backend serving a React frontend",
      "REST API integration for posters, ratings, genres, release years",
    ],
    architecture: ["React Frontend", "REST API", "Flask Backend", "Scikit-learn Model"],
    github: "https://github.com/Ayushmann18/CineNova-AI-movie-prediction",
    githubLabel: "View Repository",
    demo: null,
    featured: false,
  },
  {
    id: "resume-analyzer",
    name: "Smart AI Resume Analyzer",
    tagline: "NLP-based resume scoring tool",
    description:
      "A web app that extracts skills from a resume, evaluates ATS compatibility, and suggests improvements through resume scoring and skill gap analysis.",
    stack: ["Python", "NLP", "SpaCy", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
    highlights: [
      "Skill extraction using NLP and SpaCy",
      "ATS compatibility evaluation",
      "Resume scoring and skill gap analysis",
    ],
    architecture: ["Resume Upload", "NLP Processing", "Skill Extraction", "Analysis & Recommendations"],
    github: "https://github.com/Ayushmann18/smart-AI-resume-analyzer",
    githubLabel: "View Repository",
    demo: null,
    featured: false,
  },
];

export const dsa = {
  count: "300+",
  label: "problems solved",
  platforms: ["LeetCode", "HackerRank", "Other Platforms"],
  leetcode: profile.leetcode,
};

export const certifications = [
  {
    name: "SAP Generative AI Developer",
    issuer: "SAP Certified",
    icon: "SiSap",
    color: "#0FAAFF",
    url: "https://www.credly.com/badges/92b40937-11d9-4a82-9226-2bb4ad70b29c/public_url",
  },
  {
    name: "AI Practitioner",
    issuer: "AWS Certified",
    icon: "FaAws",
    color: "#FF9900",
    url: "https://www.credly.com/badges/69d693b2-b06b-48c2-99da-7f022bce37f6/public_url",
  },
  {
    name: "OCI 2025 Generative AI Professional",
    issuer: "Oracle Certified",
    icon: "TbCertificate",
    color: "#F80000",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=FF6CDD1CA30D4416284F938F6485E665BD61BECAA77784404B15A502B840CD74",
  },
];

export const education = [
  {
    school: "SRM Institute of Science & Technology",
    location: "Chennai, India",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    detail: "CGPA: 8.72/10",
    period: "2023 – 2027",
  },
  {
    school: "Surendranath Centenary School",
    location: "Ranchi, India",
    degree: "AISSCE (Class XII)",
    detail: "73.8%",
    period: "2020 – 2022",
  },
];

export const buildTech = ["React", "Vite"];
