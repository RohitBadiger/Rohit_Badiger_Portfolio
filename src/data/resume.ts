export const DEFAULT_CONTACT = {
  name: "Rohit Badiger",
  title: "Backend Software Engineer",
  phone: "+91 9035143766",
  email: "abhibadiger8152@gmail.com",
  linkedin: "linkedin.com/in/rohit-badiger/",
  github: "github.com/RohitBadiger",
  hackerrank: "hackerrank.com/profile/abhibadiger8152",
  tuf: "takeuforward.org/profile/Rohit8152",
};

export const SUMMARY =
  "Backend Software Engineer with hands-on experience building production-grade REST APIs, full-stack applications, and cloud-integrated systems using Java, Spring Boot, React, and AWS. Delivered end-to-end features including Twilio voice/SMS integration, JWT authentication, and ML-powered dashboards. Strong foundation in DSA, system design, and Agile workflows.";

export const SKILLS = [
  { category: "Languages", items: ["Java", "JavaScript", "TypeScript", "SQL", "Python"] },
  { category: "Backend", items: ["Spring Boot", "Node.js", "REST APIs", "Microservices", "JWT", "Spring Data JPA", "Hibernate"] },
  { category: "Frontend", items: ["React 19", "Vite", "Axios", "React Router DOM"] },
  { category: "Databases", items: ["MySQL", "MongoDB"] },
  { category: "Cloud / DevOps", items: ["AWS EC2", "AWS Lambda", "CloudWatch", "Linux", "Docker", "Jenkins", "CI/CD", "Maven"] },
  { category: "Tools", items: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "Postman", "ngrok"] },
  { category: "Core CS", items: ["DSA", "OOP", "DBMS", "OS", "Computer Networks", "System Design"] },
];

export const EXPERIENCE = [
  {
    role: "Java Full Stack Developer Intern",
    company: "EchoBrains Technologies",
    location: "Bangalore",
    period: "Jan 2026 – Apr 2026",
    team: "4-member Agile team",
    bullets: [
      "Engineered 12+ production REST API endpoints using Java 17 and Spring Boot, improving backend response handling and reducing redundant payload transfer.",
      "Implemented JWT-based stateless authentication across 10+ secured routes, eliminating session-storage dependency and improving API security.",
      "Diagnosed and resolved 20+ API and integration issues using structured logging and request tracing, improving debugging efficiency across sprints.",
      "Core member of a 4-engineer Agile team, delivering 8+ backend and frontend features across 6 development sprints with timely task completion.",
    ],
    stats: [{ label: "API Endpoints", value: "12+" }, { label: "Routes Secured", value: "10+" }, { label: "Issues Resolved", value: "20+" }, { label: "Sprints", value: "6" }],
  },
  {
    role: "AI & ML Intern",
    company: "Edunet Foundation / IBM SkillsBuild",
    location: "",
    period: "Jun 2025 – Jul 2025",
    team: "",
    bullets: [
      "Trained regression and classification models with scikit-learn on a 10,000+ row dataset, improving prediction accuracy by 15% over the baseline model.",
      "Designed and deployed Flask REST APIs for real-time inference, enabling predictions through an interactive Streamlit dashboard used by 5+ evaluators.",
      "Refactored preprocessing pipelines including feature scaling, encoding, and null handling, reducing model training time by 20%.",
    ],
    stats: [{ label: "Dataset Size", value: "10K+" }, { label: "Accuracy Gain", value: "+15%" }, { label: "Training Time Cut", value: "20%" }],
  },
];

export const PROJECTS = [
  {
    name: "VoiceCart",
    subtitle: "Full-Stack BPO Call Centre Simulation",
    github: "https://github.com/rohitBadiger/voicecart",
    tech: ["Java 17", "Spring Boot", "React 19", "MySQL 8.0", "Twilio SDK", "Maven", "Vite"],
    bullets: [
      "Architected a Spring Boot backend of 18 Java classes following strict 3-layer MVC separation, supporting the full call-centre order lifecycle from inbound call to SMS confirmation.",
      "Integrated Twilio Voice webhooks and SMS SDK for real-time call routing and automated order confirmation messaging.",
      "Designed a normalised MySQL schema with 6 relational entities enforcing referential integrity via foreign-key constraints.",
      "Developed the React 19 frontend with polling-based live call-status updates, break-management logic, and agent performance tracking.",
    ],
  },
  {
    name: "DevLaunch",
    subtitle: "Simplifying Deployment",
    github: "https://github.com/RohitBadiger/DevLaunch-Simplifying-Deployment",
    tech: ["Node.js", "AWS Lambda", "MongoDB", "JWT"],
    bullets: [
      "Built serverless deployment-trigger workflows on AWS Lambda and MongoDB, reducing manual deployment steps from 8 to 3.",
      "Secured 8+ API routes with JWT authentication and role-based access control (RBAC) for authorised deployment triggers.",
      "Implemented asynchronous deployment event queuing with CloudWatch monitoring, achieving sub-500 ms alert response latency.",
    ],
  },
  {
    name: "GrokMailClient",
    subtitle: "Java Email Client",
    github: "https://github.com/RohitBadiger/CodeClauseInternship_Email-Client-Software-in-Java",
    tech: ["Java", "IMAP", "SMTP", "Socket Programming"],
    bullets: [
      "Built a custom IMAP/SMTP email client from scratch using raw socket communication, supporting real-time inbox sync with under 300 ms latency.",
      "Engineered robust exception handling for network interruptions, achieving stable execution during 6+ hour continuous stress testing.",
    ],
  },
  {
    name: "Salary Prediction Dashboard",
    subtitle: "ML-Powered Analytics",
    github: "https://github.com/RohitBadiger/Smart_Study_Planner",
    tech: ["Python", "scikit-learn", "Streamlit", "Pandas"],
    bullets: [
      "Trained a regression model on 15,000+ rows, achieving R² = 0.92 — outperforming the baseline by 18%.",
      "Deployed an end-to-end interactive Streamlit dashboard enabling non-technical users to generate salary predictions in under 3 seconds.",
    ],
  },
];

export const CODING_PROFILES = [
  {
    name: "HackerRank",
    handle: "RohitBadiger",
    url: "https://www.hackerrank.com/profile/rohitbadiger",
    badge: "Java — 5-Star Gold",
    color: "#00EA64",
    bg: "from-[#00EA64]/10 to-[#00EA64]/5",
    border: "border-[#00EA64]/30",
    description: "5-star Gold Badge in Java. Solved 100+ challenges across algorithms, data structures, and language proficiency.",
    stats: [
      { label: "Java Stars", value: "5★" },
      { label: "Challenges", value: "100+" },
    ],
  },
  {
    name: "TakeUForward (TUF)",
    handle: "RohitBadiger",
    url: "https://takeuforward.org/profile/Rohit8152",
    badge: "DSA A-Z Sheet",
    color: "#FF6B35",
    bg: "from-[#FF6B35]/10 to-[#FF6B35]/5",
    border: "border-[#FF6B35]/30",
    description: "Actively solving the TUF A-Z DSA sheet — covering arrays, linked lists, trees, graphs, DP, and system design patterns.",
    stats: [
      { label: "Sheet", value: "A-Z DSA" },
      { label: "Topics", value: "20+" },
    ],
  },
];

export const EDUCATION = {
  degree: "B.E. Computer Science",
  institution: "Guru Nanak Dev Engineering College",
  period: "2022 – 2026",
  cgpa: "8.6 / 10",
};

export const CERTIFICATIONS = [
  { name: "AWS Cloud Practitioner Virtual Experience", issuer: "Forage / AWS" },
  { name: "JPMorgan Software Engineering Virtual Experience", issuer: "Forage" },
  { name: "IBM AI Fundamentals", issuer: "IBM SkillsBuild" },
  { name: "Java — 5-Star Gold Badge", issuer: "HackerRank" },
];
