import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({
  projects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment processing.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: "2",
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: "3",
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media platforms with data visualization and reporting features.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      technologies: ["React", "D3.js", "Firebase", "Material UI"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: "4",
      title: "AI Image Generator",
      description:
        "Web application that uses machine learning to generate unique images based on text prompts.",
      image:
        "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80",
      technologies: ["Next.js", "TensorFlow.js", "Tailwind CSS", "OpenAI API"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: "5",
      title: "Crypto Tracker",
      description:
        "Real-time cryptocurrency tracking application with price alerts and portfolio management.",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
      technologies: ["React Native", "Redux", "CoinGecko API", "Chart.js"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: "6",
      title: "Weather Forecast App",
      description:
        "Location-based weather forecast application with interactive maps and severe weather alerts.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      technologies: ["Angular", "TypeScript", "OpenWeather API", "Leaflet"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ],
  title = "Featured Projects",
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
    <section className="w-full py-20 px-4 md:px-8 bg-gray-900" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Explore my recent work and personal projects. Each project
            represents unique challenges and solutions.
          </p>
        </motion.div>

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
          className="text-center mt-16"
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