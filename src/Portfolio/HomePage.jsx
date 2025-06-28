import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ProjectsGrid from "./ProjectsGrid";
import SkillsDisplay from "./SkillsDisplay";
import EducationTimeline from "./EducationTimeline";
import ServicesSection from "./ServicesSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            <span className="text-blue-500"></span>Portfolio
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            {["Home", "Projects", "Skills", "About", "Contact"].map(
              (item, index) => (
                <li key={item} className="relative group">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              )
            )}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:hidden"
          >
            <button className="p-2 rounded-md hover:bg-gray-800 transition-colors">
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
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="pt-16">
          <HeroSection />
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="pt-8 pb-0 bg-gradient-to-b from-black to-gray-900"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Projects
              </h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Explore my latest work and personal projects that showcase my
                skills and expertise in web development.
              </p>
            </motion.div>

            <ProjectsGrid />
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="pt-4 pb-2 bg-gradient-to-b from-gray-900 to-black"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              
            </motion.div>

           
            <EducationTimeline />
             <SkillsDisplay />
             <ServicesSection/>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="pt-6 pb-8 bg-gradient-to-b from-black to-gray-900"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:w-1/2"
              >
                <div className="relative w-64 h-64 mx-auto md:mx-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-70"></div>
                  <img
                    src="https://avatars.githubusercontent.com/u/154401657?v=4"
                    alt="Developer Profile"
                    className="relative z-10 w-full h-full object-cover rounded-full border-4 border-gray-800"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="md:w-1/2"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Full-Stack Developer & UI/UX Enthusiast
                </h3>
                <p className="text-gray-300 mb-4">
                  I’m Shirantha Dissanayake, a passionate Full Stack Developer and Software Engineering undergraduate at SLIIT. I specialize in crafting modern, responsive web applications. With a solid foundation in both front-end and back-end technologies.
                </p>
                <p className="text-gray-300 mb-6">
                  I specialize in MERN stack,Java,Spring Boot and modern JavaScript
                  frameworks, with a keen eye for design and user experience.
                  many featuring AI, automation, and modern UI/UX. I’m driven by continuous learning, teamwork, and the pursuit of becoming a skilled IT professional.
                </p>
                <div className="flex gap-4">
                  <button className="px-4 py-2 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
                    Download Resume
                  </button>
                  <button className="px-4 py-2 rounded-md text-white hover:text-blue-500 transition-colors">
                    View Certificates
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="pt-8 pb-20 bg-gradient-to-b from-gray-900 to-black"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get In Touch
              </h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to
                reach out to me through any of the channels below.
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:w-1/2"
              >
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300">
                    Send Message
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="md:w-1/2 flex flex-col justify-center"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="text-white">shiranthadw@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
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
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">LinkedIn</p>
                        <p className="text-white">
                          linkedin.com/in/shiranthads
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">GitHub</p>
                        <p className="text-white">github.com/shiranthaDS</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                    <div className="flex gap-4">
                      <a
                        href="#twitter"
                        className="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-500 flex items-center justify-center transition-colors duration-300"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-white"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                      <a
                        href="#instagram"
                        className="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-500 flex items-center justify-center transition-colors duration-300"
                      >
                        <span className="sr-only">Instagram</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      </a>
                      <a
                        href="#facebook"
                        className="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-500 flex items-center justify-center transition-colors duration-300"
                      >
                        <span className="sr-only">Facebook</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-white"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a
                        href="#youtube"
                        className="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-500 flex items-center justify-center transition-colors duration-300"
                      >
                        <span className="sr-only">YouTube</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-white"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()}  All rights
                reserved.
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="#privacy"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#sitemap"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;