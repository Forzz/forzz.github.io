export const personal = {
  name: "Максим Баннов",
  title: "Full-Stack Developer",
  bio: "Разрабатываю современные веб-приложения. Люблю чистый код, красивый UI и сложные задачи.",
  email: "hello@example.com",
  location: "Россия",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    telegram: "https://t.me/yourusername",
  },
};

export const skills = [
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "Python", category: "language" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Docker", category: "devops" },
  { name: "Git", category: "devops" },
];

export const experience = [
  {
    type: "work" as const,
    role: "Senior Frontend Developer",
    company: "Компания А",
    period: "2023 — настоящее время",
    description: "Разработка SPA на React/Next.js, ревью кода, менторство джуниоров.",
  },
  {
    type: "work" as const,
    role: "Frontend Developer",
    company: "Компания Б",
    period: "2021 — 2023",
    description: "Верстка и интеграция REST API, оптимизация производительности.",
  },
  {
    type: "education" as const,
    role: "Бакалавр, Информатика",
    company: "Университет",
    period: "2017 — 2021",
    description: "Алгоритмы, базы данных, сети.",
  },
];
