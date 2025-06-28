import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = ({
  name = "Shirantha Dissanayake",
  title = "Full Stack Developer",
  description = "I'm passionate about creating smart web apps. I bring sleek interfaces to life using React, modern UI frameworks, and creative design principles.",
  profileImage = "https://media.licdn.com/dms/image/v2/D5603AQEhmBmxeU2DLQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732076829377?e=1756339200&v=beta&t=kQi45eCcotD2GSUKIsoSsAwRToDUxR4sN0JAG9rmgQY",
  socialLinks = {
    github: "https://github.com/shiranthaDS",
    linkedin: "https://www.linkedin.com/in/shiranthads/",
    
  },
}) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (currentIndex < title.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + title[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, title]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 600;

    const particles = [];

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 10);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.1})`,
        });
      }
    };

    createParticles();

    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (200 - distance) / 5000;

          particle.speedX += forceDirectionX * force;
          particle.speedY += forceDirectionY * force;
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        particle.speedX *= 0.98;
        particle.speedY *= 0.98;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(150, 150, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 500;
      particles.length = 0;
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-start pt-12">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm {name}
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl font-medium mb-6 text-blue-400 h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="inline-block">{typedText}</span>
            <span className="inline-block w-1 h-6 bg-blue-400 ml-1 animate-blink"></span>
          </motion.div>

          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a 
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center"
            >
              View Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-950 rounded-md"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="flex gap-4 mt-8 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-spin-slow blur-md"></div>

            <div className="relative rounded-full border-4 border-blue-500 overflow-hidden h-64 w-64 md:h-80 md:w-80 bg-gray-900">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute top-0 right-0 h-4 w-4 rounded-full bg-blue-500 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 h-4 w-4 rounded-full bg-purple-500 animate-pulse"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;