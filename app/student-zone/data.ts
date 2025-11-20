import { BookOpen, Briefcase, GraduationCap, UserPlus } from "lucide-react";

export const featuredCourses = [
  {
    title: "Full Stack Web Development",
    description: "Master front-end and back-end technologies to build complete web applications.",
    duration: "6 Months",
    instructor: "Jane Doe",
    img: "/1.jpg"
  },
  {
    title: "Data Science with Python",
    description: "Learn to analyze data, create visualizations, and build predictive models.",
    duration: "4 Months",
    instructor: "John Smith",
    img: "/2.jpg"
  },
  {
    title: "Mobile App Development (React Native)",
    description: "Build cross-platform mobile apps for iOS and Android with React Native.",
    duration: "5 Months",
    instructor: "Emily White",
    img: "/3.jpg"
  },
];

export const items = [
  {
    title: "Courses",
    desc: "Explore industry-level courses designed to boost your career and skills.",
    icon: BookOpen,
    link: "/student-zone/courses",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Trainings",
    desc: "Hands-on practical training with realtime projects from our expert mentors.",
    icon: GraduationCap,
    link: "/student-zone/trainings",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Internships",
    desc: "Work on real client projects and gain practical experience.",
    icon: Briefcase,
    link: "/student-zone/internships",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Work With Us",
    desc: "Join Ignot Solutions and grow with a fast-scaling tech team.",
    icon: UserPlus,
    link: "/student-zone/works-with-us",
    color: "from-purple-500 to-pink-500",
  },
];
