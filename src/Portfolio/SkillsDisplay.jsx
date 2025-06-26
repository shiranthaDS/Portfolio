import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SkillsDisplay = ({
  skills = [
    { name: "React", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "CSS/Tailwind", level: 88, category: "frontend" },
    { name: "Next.js", level: 82, category: "frontend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express", level: 78, category: "backend" },
    { name: "PostgreSQL", level: 75, category: "backend" },
    { name: "GraphQL", level: 70, category: "backend" },
    { name: "DevOps", level: 65, category: "other" },
    { name: "UI/UX Design", level: 72, category: "other" },
    { name: "Testing", level: 68, category: "other" },
  ],
}) => {
  const [isInView, setIsInView] = useState(false);
  const [progressValues, setProgressValues] = useState({});

  useEffect(() => {
    const initialValues = skills.reduce((acc, skill) => {
      acc[skill.name] = 0;
      return acc;
    }, {});
    setProgressValues(initialValues);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          skills.forEach((skill) => {
            setTimeout(() => {
              setProgressValues((prev) => ({
                ...prev,
                [skill.name]: skill.level,
              }));
            }, 300);
          });
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("skills-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [skills]);

  const categories = ["frontend", "backend", "other"];
  const additionalTechnologies = [
    "Docker",
    "AWS",
    "Redux",
    "MongoDB",
    "Firebase",
    "Jest",
    "Cypress",
    "Figma",
    "Git",
    "CI/CD",
    "Webpack",
    "Vite",
    "Storybook",
    "Vercel",
  ];

  return (
    <section id="skills-section" className="py-16 px-4 md:px-8 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Skills & Expertise
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          My technical toolkit and proficiency levels across various
          technologies and frameworks
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 capitalize text-center">
                {category === "frontend"
                  ? "Frontend Development"
                  : category === "backend"
                  ? "Backend Development"
                  : "Other Skills"}
              </h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm bg-black/30 px-2 py-1 rounded-md">
                          {progressValues[skill.name] || 0}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800/50 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                          style={{
                            width: `${progressValues[skill.name] || 0}%`,
                            transition: "width 1s ease-in-out",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTechnologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsDisplay;