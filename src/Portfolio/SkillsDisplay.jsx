import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { 
  SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiSpringboot, SiPhp,
  SiDocker,  SiPython,
  SiCplusplus, SiKotlin, SiMysql, SiPostgresql,
  SiMongodb, SiFirebase, SiGit, SiVite, SiVercel
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaServer, FaTools, FaCode } from "react-icons/fa";

const SkillsDisplay = () => {
  const [isInView, setIsInView] = useState(false);
  
  const skills = [
    // Frontend
    { name: "React", level: 90, category: "frontend", icon: <SiReact className="text-cyan-400" /> },
    { name: "TypeScript", level: 85, category: "frontend", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Tailwind CSS", level: 88, category: "frontend", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Next.js", level: 82, category: "frontend", icon: <SiNextdotjs className="text-white" /> },
    
    // Backend
    { name: "Node.js", level: 80, category: "backend", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express", level: 78, category: "backend", icon: <SiExpress className="text-gray-300" /> },
    { name: "Spring Boot", level: 75, category: "backend", icon: <SiSpringboot className="text-green-600" /> },
    { name: "PHP", level: 77, category: "backend", icon: <SiPhp className="text-indigo-500" /> },
    
    // Programming Languages
    { name: "Java", level: 85, category: "tools", icon: <FaJava className="text-red-600" /> },
    { name: "Python", level: 82, category: "tools", icon: <SiPython className="text-blue-500" /> },
    { name: "C++", level: 75, category: "tools", icon: <SiCplusplus className="text-blue-600" /> },
    { name: "Kotlin", level: 68, category: "tools", icon: <SiKotlin className="text-purple-500" /> }
  ];

  const additionalTech = [
    { name: "MySQL", icon: <SiMysql className="text-orange-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    { name: "Git", icon: <SiGit className="text-orange-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Vite", icon: <SiVite className="text-purple-300" /> },
    { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
    { name: "CI/CD", icon: <FaTools className="text-blue-400" /> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const categoryData = {
    frontend: {
      title: "Frontend",
      icon: <FaCode className="text-blue-400" />,
      color: "from-blue-500 to-cyan-400"
    },
    backend: {
      title: "Backend",
      icon: <FaServer className="text-purple-400" />,
      color: "from-purple-500 to-pink-400"
    },
    tools: {
      title: "Programming Languages",
      icon: <FaCode className="text-green-400" />,
      color: "from-green-500 to-teal-400"
    }
  };

  return (
    <section 
      id="skills-section" 
      className="relative py-20 px-4 md:px-8 bg-gray-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Technical Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Technologies I work with and my proficiency in each area
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {Object.entries(categoryData).map(([categoryKey, category], index) => (
            <motion.div
              key={categoryKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl h-full border border-gray-700/50">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br bg-gray-700 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {skills
                    .filter(skill => skill.category === categoryKey)
                    .map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center">
                            <div className="mr-3 text-xl">{skill.icon}</div>
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalTech.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.9 + index * 0.05 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-700/50 group-hover:border-transparent transition-all duration-200">
                  <span className="text-xl">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default SkillsDisplay;