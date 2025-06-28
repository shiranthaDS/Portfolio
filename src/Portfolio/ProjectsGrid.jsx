import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({
  projects = [
    {
      id: "1",
      title: "Landscaping & Garden Services Management System",
      description:
        "This application Developed using the MERN stack (MongoDB, Express.js, React.js, Node.js)",
      image:
        "https://i.imgur.com/6zQISk6.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      demoUrl: "#",
      githubUrl: "https://github.com/shiranthaDS/GREENSCAPE",
    },
    {
      id: "2",
      title: "Computer Spare Parts Management System",
      description:
        " This web-based project is implemented following the Model-View-Controller (MVC) architecture, utilizing Java as the primary backend language",
      image:
        "https://i.imgur.com/bnK4OZa.png",
      technologies: ["Java", "JSP", "MySql", "Bootstrap"],
      demoUrl: "#",
      githubUrl: "https://github.com/shiranthaDS",
    },
    {
      id: "3",
      title: "Online Fashion Store ",
      description:
        "Developed a dynamic e-commerce website that allows users to browse, search, and purchase fashion items online.",
      image:
        "https://i.imgur.com/u4WikSp.png",
      technologies: ["HTML", "JS", "Bootstrap", "PHP"],
      demoUrl: "#",
      githubUrl: "https://github.com/shiranthaDS",
    },
    {
      id: "4",
      title: "movie ticket booking app",
      description:
        "The app offers an intuitive booking system, allowing users to select showtimes, dates, and seats .",
      image:
        "https://i.imgur.com/uhLSIq0.jpeg",
      technologies: ["Kotlin", "Android Studio"],
      demoUrl: "#",
      githubUrl: "https://github.com/shiranthaDS",
    },
    {
      id: "5",
      title: " Personal Finance Tracker App",
      description:
        "Developed using Kotlin in Android Studio, designed to help users take control of their personal finances",
      image:
        "https://i.imgur.com/sO7nagq.png",
      technologies: ["Kotlin", "Android Studio", "SQLite"],
      demoUrl: "#",
      githubUrl: "https://github.com/shiranthaDS",
    },
    {
      id: "6",
      title: "AI Study Planner ",
      description:
        "Personalized study planner that uses AI to create customized study schedules based on user preferences and learning styles.",
      image:
        "https://i.imgur.com/TsuUb6m.png",
      technologies: ["React",  "Node.js", "Mongo DB"],
      demoUrl: "#",
      githubUrl: "https://github.com/shiranthaDS",
    },
  ],
  title = "",
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="w-full pt-20 pb-0 px-4 md:px-8 bg-gray-900" id="projects">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href="#"
            className="inline-block px-8 py-3 rounded-full bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600/20 hover:text-purple-300 transition-all duration-300 font-medium text-lg"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGrid;