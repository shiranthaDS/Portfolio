import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, MapPin, Award, BookOpen } from "../components/ui/icons";

const EducationCard = ({
  item,
  index,
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
      animate={
        isInView
          ? { x: 0, opacity: 1 }
          : { x: index % 2 === 0 ? -200 : 200, opacity: 0 }
      }
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: index * 0.2,
      }}
      className={`flex items-center justify-center mb-12 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
    >
      <Card className="w-full max-w-lg overflow-hidden relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group backdrop-blur-xl shadow-2xl hover:shadow-purple-500/20">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
        <br />
        <CardContent className="p-0 relative z-10">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 p-5 rounded-xl shadow-lg text-white max-w-xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <motion.div
                  className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-400/50 shadow-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={item.logo}
                    alt={item.school}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {item.school}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {item.location}
                  </div>
                </div>
              </div>
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all">
                <Calendar className="w-3 h-3 mr-1" />
                {item.years}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm mr-3">
                <Award className="w-5 h-5 text-blue-400 group-hover:text-purple-300 transition-colors" />
              </div>
              <h4 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {item.degree}
              </h4>
            </div>

            {item.gpa && (
              <div className="mb-3">
                <Badge className="bg-gradient-to-r from-green-900/40 to-green-800/60 text-green-300 border border-green-500/30 hover:from-green-800/60 hover:to-green-700/80 transition-all">
                  GPA: {item.gpa}
                </Badge>
              </div>
            )}

            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4 leading-relaxed">
              {item.description}
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-500 uppercase tracking-wider">
                <div className="p-1.5 rounded-md bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm mr-2">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                </div>
                <span>Key Courses</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.courses.map((course, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 hover:from-blue-800/60 hover:to-purple-800/60 text-blue-300 border border-blue-500/30 transition-all duration-300">
                      {course}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating orb */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const EducationTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const educationData = [
    {
      id: 1,
      school: "SLIIT",
      degree: "BSc(Hons) in Information Technology, Specialising in Software Engineering",
      years: "2023- Present",
      location: "Malabe,Sri Lanka",
      gpa: "",
      description:
        "A strong focus on Full-Stack Development, Software Architecture, and Agile Methodologies.Collaborated on industry-based projects and contributed to research in software quality and engineering practices.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOeDrrtZP5JM_GndETB8ijK-l--gvA1eostf-Uo-TO0LLl_HifgQdyY8I8ZA8_uM4bF4&usqp=CAU",
    courses: [
  "OOP",
  "Software Engineering",
  "Web Development",
  "Mobile Apps",
  "Cloud Computing"
]
,
    },
    {
      id: 2,
      school: "Bandarawela Central College",
      degree: "G.C.E. Ordinary Level (O/L) & Advanced Level (A/L)",
      years: "2012 - 2020",
      location: "Bandarawela, Sri Lanka",
      gpa: "",
      description:
        "Completed the G.C.E. A/L in the Physical Science stream,Successfully passed the G.C.E. O/L examination with distinctions in all subjects.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyErrv7janZXKgSW3wnPEZGxF_ZBGdb5i7nQ&s",
      courses: [],
    },
  ];

  return (
    <section
      className="pt-8 pb-20 bg-[#0f0f0f] relative overflow-hidden"
      id="education"
      ref={containerRef}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.15),transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            Education Journey
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My academic path and continuous learning journey that shaped my
            expertise in technology and innovation
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Animated timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-transparent via-gray-700 to-transparent h-full hidden md:block">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"
              style={{ height: timelineHeight }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Timeline dots */}
          {educationData.map((_, index) => (
            <motion.div
              key={index}
              className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-purple-500/50 hidden md:block z-10"
              style={{ top: `${(index + 1) * 50}%` }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}
            >
              <div className="w-3 h-3 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
          ))}

          {/* Education cards */}
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <EducationCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationTimeline;