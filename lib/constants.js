// lib/constants.js

export const CONTACT_INFO = {
  coachingName: "Career Crave Education Centre",
  teacherName: "Er. Shravan Katiyar",
  address: "117/N/8 Kakadeo Kanpur Nagar, Uttar Pradesh (INDIA)",
  googleMap: "https://share.google/WyrhMMFdMys6RcGYr",
  whatsapp: "8881000073",
  mobile: ["7408677555", "9161000073"],
  email: "cceckanpur@gmail.com",
  directorEmail: "vijay@cceckanpur.com"
};

export const BATCHES_DATA = [
  {
    id: 1,
    name: "Foundation Batch",
    duration: "2 Years",
    timing: "Class XI & XII",
    target: "JEE 2027 - 2028",
    images:'/images/foundation.jpg',
    eligibility: "Class X to XI Moving Students",
    description: "A comprehensive two-year program designed for students moving from Class X to XI, building strong fundamentals from the ground up.",
    features: ["Complete syllabus coverage", "Board + JEE preparation", "Regular tests", "Personal attention"]
  },
  {
    id: 2,
    name: "Ranker Batch",
    duration: "1 Year",
    timing: "Class XII",
    target: "JEE 2027",
    images:'/images/ranker-batch.jpg',
    eligibility: "Class XI to XII Moving Students",
    description: "Intensive one-year program for Class XII students preparing for both board exams and JEE simultaneously.",
    features: ["Comprehensive revision", "Mock tests", "Board + JEE focus", "Multiple revisions"]
  },
  {
    id: 3,
    name: "Target Batch",
    duration: "1 Year",
    timing: "XII Pass",
    target: "JEE 2027",
    images:'/images/target-batch.jpg',
    eligibility: "XII pass with Minimum 75% or Top 20 Percentile",
    description: "Specially designed for XII pass students who want to improve their performance and crack JEE in their next attempt.",
    features: ["Focused guidance", "Stimulating atmosphere", "Foundation strengthening", "Top gear preparation"]
  },
  {
    id: 4,
    name: "Super Ranker Batch (SRB)",
    duration: "1 Year",
    timing: "JEE Qualified",
    target: "JEE 2027",
    images:'/images/super-ranker.jpg',
    eligibility: "Have rank in previous JEE",
    description: "Exclusive batch for students who already have a JEE rank and want to improve their position significantly.",
    features: ["Rank improvement focus", "Advanced problem solving", "Expert mentorship", "Personalized attention"]
  }
];

export const TEST_SERIES = [
  {
    id: 1,
    type: "Online Test Series",
    features: [
      "Live online tests",
      "Instant result analysis",
      "Performance tracking",
      "All India ranking",
      "Detailed solutions"
    ]
  },
  {
    id: 2,
    type: "Offline Test Series",
    features: [
      "Exam hall simulation",
      "Paper-based tests",
      "Detailed evaluation",
      "Personal feedback",
      "Doubt clearing sessions"
    ]
  }
];

export const ONLINE_COURSES = [
  {
    id: 1,
    name: "Foundation Batch (Online)",
    duration: "2 Years",
    target: "JEE 2027 - 2028",
    features: ["Live Classes", "Online Tests", "PDF Notes", "Online Doubt Support"]
  },
  {
    id: 2,
    name: "Ranker Batch (Online)",
    duration: "1 Year",
    target: "JEE 2027",
    features: ["Live Classes", "Online Tests", "PDF Notes", "Online Doubt Support"]
  },
  {
    id: 3,
    name: "Target Batch (Online)",
    duration: "1 Year",
    target: "JEE 2027",
    features: ["Live Classes", "Online Tests", "PDF Notes", "Online Doubt Support"]
  },
  {
    id: 4,
    name: "Super Ranker Batch (Online)",
    duration: "1 Year",
    target: "JEE 2027",
    features: ["Live Classes", "Online Tests", "PDF Notes", "Online Doubt Support"]
  }
];

export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "#",
    dropdown: [
      { name: "About Career Crave", href: "/about#ccec" },
      { name: "About Directors", href: "/about#directors" },
      { name: "About Er. Shravan Sir", href: "/about#shravan" }
    ]
  },
  {
    name: "Courses",
    href: "#",
    dropdown: [
      { name: "Classroom Programs", href: "/courses#classroom" },
      { name: "Online Programs", href: "/courses#online" },
      { name: "About JEE Main", href: "/courses#jee-main" },
      { name: "About JEE Advanced", href: "/courses#jee-advanced" }
    ]
  },
  { name: "Results", href: "/results" },
  { name: "Test Series", href: "/test-series" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" }
];