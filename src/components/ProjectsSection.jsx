import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaUtensils, FaChartLine, FaShoppingCart, FaVideo, FaHeart } from 'react-icons/fa';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AnnSeva",
      description: "A comprehensive MERN stack application for food donation management, connecting donors with those in need through an intuitive platform.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=300&fit=crop",
      github: "https://github.com/tharun2107/AnnSevaF",
      live:"https://annseva-si6t.onrender.com/",
      icon: FaUtensils,
      tech: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Expense Tracker",
      description: "A feature-rich expense tracking application with advanced chart visualization system for personal finance management.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
      github: "https://github.com/tharun2107/expensetracker",
      live: "https://exptrackerrr.netlify.app/",
      icon: FaChartLine,
      tech: ["React", "Charts.js", "MERN"]
    },
    {
      title: "StyleSphere",
      description: "A modern, responsive e-commerce platform built using the MERN stack. Offers fashion products with Razorpay payments and JWT authentication.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      github: "https://github.com/tharun2107/StyleSphere",
      live: "https://styleesphere.netlify.app/",
      icon: FaShoppingCart,
      tech: ["MERN", "Razorpay", "JWT", "E-commerce"]
    },
    {
      title: "LeetCode Video Extension",
      description: "Chrome extension that integrates with LeetCode, adding a custom 'Video' button to fetch YouTube solutions instantly without switching tabs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "https://github.com/tharun2107/leetcode-video-solution-extension",
      live: null,
      icon: FaVideo,
      tech: ["Chrome Extension", "JavaScript", "API Integration"]
    },
    {
      title: "HealthVault",
      description: "MERN stack application to track health with pages for diet tracking, sleep tracking, fitness, medication and in-app notifications.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      github: "https://github.com/tharun2107/healthvault",
      live: "https://healthvaultt.netlify.app/",
      icon: FaHeart,
      tech: ["MERN", "Health Tracking", "Notifications"]
    },
    {
      title: "Next Hire",
      description: "MERN stack platform with resume builder, ATS score analysis, JD-based learning resources, real-time MCQ tests, and mock interviews using Gemini API.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
      github: "https://github.com/tharun2107/jd-to-job",
      live: null,
      icon: FaChartLine,
      tech: ["MERN", "NLP", "Gemini API", "ATS", "PDF Export", "Real-time Interview"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="neon-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing my latest work and creative solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className="gradient-border card-3d group"
            >
              <div className="gradient-border-content overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <project.icon className="text-4xl text-cyan-400" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
                    <project.icon className="mr-3 text-cyan-400" />
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-cyan-500 text-black px-4 py-2 rounded-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
