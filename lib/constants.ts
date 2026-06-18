export const SITE_TITLE = "Samuella | Full-Stack Software Engineer";
export const SITE_DESCRIPTION =
  "Full-Stack Software Engineer specializing in building seamless digital experiences. Expert in Next.js, TypeScript, React, Node.js, Java, Spring Boot, and modern web technologies. Building innovative solutions for e-commerce, fintech, and business automation.";

export const SKILLS = {
  frontend: [
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Tailwind CSS" },
    { name: "HTML/CSS" },
    { name: "Responsive Design" },
    { name: "Data Visualization" },
  ],
  backend: [
    { name: "Node.js" },
    { name: "Express" },
    { name: "Java" },
    { name: "Spring Boot" },
    { name: "API Development" },
    { name: "RESTful Services" },
    { name: "Payment Gateway Integration" },
    { name: "Telecom API Integration" },
    { name: "Financial APIs" },
    { name: "WhatsApp Business API" },
  ],
  databases: [
    { name: "MongoDB" },
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "Database Design" },
    { name: "Data Modeling" },
  ],
  other: [
    { name: "Visual Studio Code" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "Postman" },
    { name: "Docker" },
    { name: "AWS" },
    { name: "Vercel" },
    { name: "SEO Optimization" },
    { name: "Performance Optimization" },
    { name: "AI/ML Integration" },
    { name: "CI/CD" },
    { name: "User Research" },
  ],
};

export const SERVICES = [
  {
    title: "Custom Web Application Development",
    description:
      "End-to-end development of scalable web applications using modern technologies. From concept to deployment, I build solutions that solve real business problems with clean, maintainable code and exceptional user experiences.",
    icon: "FaLaptopCode",
  },
  {
    title: "E-commerce & Marketplace Solutions",
    description:
      "Comprehensive e-commerce platforms with secure payment integration, inventory management, and user-friendly interfaces. Specialized in marketplace development, anonymous purchasing systems, and multi-vendor platforms.",
    icon: "FaShoppingCart",
  },
  {
    title: "FinTech & Financial Application Development",
    description:
      "Secure financial applications including personal finance management, expense tracking, budgeting tools, and investment platforms. Expertise in payment gateway integration and financial API development.",
    icon: "FaDatabase",
  },
  {
    title: "Business Process Automation & Tools",
    description:
      "Custom automation solutions and business tools to streamline operations. From data processing to workflow automation, I build systems that save time and reduce manual effort while ensuring reliability.",
    icon: "FaRobot",
  },
  {
    title: "API Development & Third-Party Integration",
    description:
      "Robust RESTful API development and seamless third-party service integration. Specialized in telecom APIs, financial services, communication platforms, and AI/ML service integration for enhanced functionality.",
    icon: "FaPlug",
  },
  {
    title: "SEO-Optimized Website Development",
    description:
      "High-performance, SEO-friendly websites built with modern frameworks. Focus on Core Web Vitals, responsive design, and search engine optimization to ensure maximum visibility and user engagement.",
    icon: "FaPalette",
  },
];

export const CURRENT_PROJECT = {
  title: "E-Commerce Platform with Anonymous Purchase System",
  description:
    "A fully-featured online store with product management, shopping cart, and secure checkout functionality.",
  technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "PayStack", "Clerk"],
  imageUrl: "/images/xo.png",
  projectUrl: "https://xotoys.vercel.app",
  progress: 75,
  estimatedCompletion: "March 2025",
};

export const FEATURED_PROJECTS = [
  {
    title: "WayIn - Tech Career Compass",
    description:
      "Find your place in tech with a free, interactive career compass. Explore nine career branches, take a fit quiz, and get a personalised roadmap with curated resources, mentor guidance, and community recommendations.",
    technologies: ["Next.js", "TypeScript", "React", "Interactive Quiz", "Career Mapping"],
    imageUrl: "/images/wayin.png",
    projectUrl: "https://wayintech.vercel.app",
  },
  {
    title: "AgooSMS - Bulk SMS Platform & API",
    description:
      "Send bulk SMS to your customers at GH₵0.05 per message. Developers get API access at GH₵0.03 per SMS. Voice-to-text in Twi, mobile money payments, and instant delivery across all networks in Ghana.",
    technologies: ["Next.js", "Turborepo", "REST API", "Mobile Money", "PWA", "Webhooks"],
    imageUrl: "/images/agoosms.png",
    projectUrl: "https://agoosms.com",
  },
  {
    title: "BookPlug - Community Book Sharing Platform",
    description:
      "Borrow books from GH₵5-20/month instead of buying. Lend your books and earn GH₵8-20 monthly. Buy, sell, or give away books with neighbors across Ghana.",
    technologies: ["Next.js", "Turborepo", "Supabase", "PWA", "Google Books API", "OAuth"],
    imageUrl: "/images/bookplug.png",
    projectUrl: "https://bookplug.app",
  },
  {
    title: "iSellData - Mobile Data Marketplace",
    description:
      "Buy affordable data bundles with instant delivery across all networks in Ghana. Competitive prices, mobile money payments, and 24/7 availability.",
    technologies: ["Next.js", "TypeScript", "Telecom APIs", "Payment Gateway", "MongoDB"],
    imageUrl: "/images/iselldata.png",
    projectUrl: "https://iselldata.net",
  },
  {
    title: "Nest - Personal Finance App",
    description:
      "Track your expenses, set budgets, and grow your savings. See where your money goes and take control of your finances with simple, visual insights.",
    technologies: ["Next.js", "TypeScript", "React", "Financial APIs", "Data Visualization"],
    imageUrl: "/images/nest.png",
    projectUrl: "https://nestgrow.vercel.app",
  },
  {
    title: "Atrady - Start Your Business",
    description:
      "Source products from international suppliers and start your own business. We handle quality checks, shipping, and support so you can focus on selling.",
    technologies: ["Next.js", "React", "API Integration", "WhatsApp Business", "SEO"],
    imageUrl: "/images/atrady.png",
    projectUrl: "https://atrady.com",
  },
  {
    title: "XO Toys - Adult Store",
    description:
      "Shop discreetly with anonymous checkout and private delivery. No account required, no purchase history stored. Your privacy, guaranteed.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "PayStack", "Clerk"],
    imageUrl: "/images/xo.png",
    projectUrl: "https://xotoys.vercel.app",
  },
  {
    title: "QuizMe - Smart Study Tool",
    description:
      "Turn your notes and slides into quizzes instantly. Study smarter with AI-generated questions and track your progress as you learn.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "AI/ML APIs"],
    imageUrl: "/images/quizme.png",
    projectUrl: "https://quizmev2.vercel.app/",
  },
];

export const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "turntabl",
    period: "Dec 2025 - Present",
    description: "Focusing on frontend and user experience engineering, contributing to several projects. Building intuitive interfaces and driving UX improvements across client-facing applications."
  },
  {
    role: "TLC Trainee",
    company: "turntabl",
    period: "Aug 2025 - Dec 2025",
    description: "Trained in real-world software engineering practices while contributing to practical projects and team-based development."
  },
  {
    role: "Software Developer",
    company: "Dove-Eloyna Int'l Ltd",
    period: "Mar 2025 - Sep 2025",
    description: "Worked on production software systems, contributing to frontend and backend development for business applications."
  },
  {
    role: "Software Developer",
    company: "aeTech Digital Hub",
    period: "Apr 2025 - Jul 2025",
    description: "Led 6 frontend developers and trained 2 interns on React API integration. Standardized UI components across 8+ client projects, reducing development time by 20%."
  },
  {
    role: "Founder",
    company: "This Team",
    period: "Sep 2023 - Dec 2024",
    description: "Founded and led a multi-disciplinary software team focused on building people-centered solutions. Set vision, managed projects end-to-end, and drove impactful digital products."
  },
  {
    role: "Product Developer (Frontend) Intern",
    company: "Sesi Technologies",
    period: "Sep 2024 - Nov 2024",
    description: "Built frontend interfaces for real products, improving UI quality and strengthening hands-on frontend development skills."
  },
  {
    role: "Backend Developer Apprentice",
    company: "KodeCamp",
    period: "Aug 2024 - Sep 2024",
    description: "Led backend development tasks, designed databases, broke features into tasks, and implemented efficient searching and filtering algorithms."
  },
  {
    role: "Frontend Web Developer",
    company: "Ideation Axis",
    period: "May 2024 - Jun 2024",
    description: "Built multiple frontend projects including a recipe finder and OTP system, strengthening data fetching skills, logical thinking, and live coding confidence."
  }
];


export const CONTACT_INFO = {
  email: "mailto:samuellamanyeaglago@gmail.com",
  phone: "tel:+233509581027",
  whatsapp:"https://wa.me/233509581027",
  location: "Kwabenya - Accra, Ghana",
  social: {
    github: "https://github.com/aglago",
    linkedin: "https://linkedin.com/in/aglago",
    twitter: "https://x.com/smaglago",
  },
};
