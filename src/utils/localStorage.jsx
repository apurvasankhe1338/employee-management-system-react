
const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "emp1@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Build Login Page",
        description: "Create UI for login using React",
        date: "2026-02-01",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve responsive issue in navbar",
        date: "2026-01-28",
        category: "Bug Fix",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Integration",
        description: "Integrate authentication API",
        date: "2026-01-25",
        category: "Backend",
      },
    ],
  },
  {
    id: 2,
    firstname: "Priya",
    email: "emp2@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Dashboard",
        description: "Create dashboard layout with Tailwind",
        date: "2026-02-02",
        category: "UI/UX",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Dark Mode",
        description: "Implement theme toggle",
        date: "2026-01-30",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Chart Integration",
        description: "Add charts using Recharts",
        date: "2026-02-05",
        category: "Visualization",
      },
    ],
  },
  {
    id: 3,
    firstname: "Rohit",
    email: "emp3@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database Schema",
        description: "Design MongoDB schema",
        date: "2026-02-01",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "CRUD APIs",
        description: "Create REST APIs for employees",
        date: "2026-01-27",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "JWT Auth",
        description: "Implement JWT authentication",
        date: "2026-01-26",
        category: "Security",
      },
    ],
  },
  {
    id: 4,
    firstname: "Neha",
    email: "emp4@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Unit Testing",
        description: "Write test cases for components",
        date: "2026-02-03",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Form Validation",
        description: "Add validation to forms",
        date: "2026-01-29",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Performance Check",
        description: "Optimize component rendering",
        date: "2026-02-06",
        category: "Optimization",
      },
    ],
  },
  {
    id: 5,
    firstname: "Kunal",
    email: "emp5@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Deploy App",
        description: "Deploy app on Vercel",
        date: "2026-02-04",
        category: "Deployment",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Environment Setup",
        description: "Setup project environment",
        date: "2026-01-26",
        category: "Setup",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Docs Writing",
        description: "Write project documentation",
        date: "2026-02-07",
        category: "Documentation",
      },
    ],
  },
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
