
import { motion } from "framer-motion";
import {
  SiReact,
  
  SiNodedotjs,
  
  SiFlutter,
  
} from "react-icons/si";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const ServiceCard = ({
  icon,
  title,
  description,
  technologies,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        y: -15,
        rotateX: 5,
        transition: { duration: 0.3 },
      }}
      className="w-full perspective-1000"
    >
      <Card className="h-full overflow-hidden relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group backdrop-blur-xl shadow-2xl hover:shadow-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

        <CardContent className="p-8 relative z-10">
          <br/>
          <motion.div
            className="mb-6 p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-fit backdrop-blur-sm"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            
            <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 flex items-center justify-center">
              {icon}
            </div>
          </motion.div>

          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
            {title}
          </h3>

          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6 leading-relaxed">
            {description}
          </p>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: delay + 0.1 * i }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 hover:from-blue-800/60 hover:to-purple-800/60 text-blue-300 border border-blue-500/30 transition-all duration-300">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillCard = ({ icon, name, level, color, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        transition: { duration: 0.3 },
      }}
      className="perspective-1000"
    >
      <Card className="p-6 bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group backdrop-blur-xl relative overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        <div className="relative z-10 text-center">
          <motion.div
            className="mb-4 flex justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className={`p-4 rounded-full bg-gradient-to-br ${color.replace("from-", "from-").replace("to-", "to-").replace("/20", "/20")} backdrop-blur-sm flex items-center justify-center`}
            >
              <div className="text-white flex items-center justify-center">{icon}</div>
            </div>
          </motion.div>

          <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
            {name}
          </h3>

          <div className="w-full bg-gray-700/50 rounded-full h-2 mb-2 overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${color} rounded-full`}
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1.5, delay: delay + 0.5 }}
              viewport={{ once: true }}
            />
          </div>

          <span className="text-sm text-gray-400">{level}%</span>
        </div>
      </Card>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <SiReact size={32} />,
      title: "Frontend Development",
      description:
        "Creating responsive, interactive user interfaces with modern frameworks and cutting-edge technologies for exceptional user experiences.",
      technologies: [
        "React",
        "Vue.js",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      icon: <SiNodedotjs size={32} />,
      title: "Backend Development",
      description:
        "Building robust, scalable server-side applications with secure APIs, efficient databases, and cloud-native architectures.",
      technologies: [
        "Node.js",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "PHP",
        "Spring Boot",
      ],
    },
    {
      icon: <SiFlutter size={32} />,
      title: "Mobile Development",
      description:
        "Developing cross-platform mobile applications with native performance and seamless user experiences across all devices.",
      technologies: [
        "React Native",
        "Flutter",
        "Kotlin",
        "Firebase",
      ],
    },
   
  ];

  return (
    <section
      className="py-20 relative bg-[#0f0f0f] overflow-hidden"
      id="services"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.15),transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
            My Services
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive solutions tailored to bring your digital vision to
            life with cutting-edge technologies and industry best practices
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              technologies={service.technologies}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

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

export default ServicesSection;