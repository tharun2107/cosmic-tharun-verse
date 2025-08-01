import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaBook, FaTrophy, FaUser } from 'react-icons/fa';
import gdg_image from "../lib/gdg_image.jpeg"
const AboutSection = () => {
  const education = [
    {
      institution: "CVR College of Engineering",
      degree: "B.Tech CSE (Data Science)",
      grade: "9.45 CGPA",
      icon: FaGraduationCap
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate",
      grade: "99%",
      icon: FaBook
    },
    {
      institution: "Sri Chaitanya School",
      degree: "High School",
      grade: "GPA 10",
      icon: FaBook
    }
  ];

  const achievements = [
    {
      title: "GDG Solution Challenge",
      award: "Consolation Prize",
      icon: FaTrophy,
      image: gdg_image, // Add your image path here
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7296592338192121856/" // Add your LinkedIn link here
    },
    {
      title: "Academic Excellence",
      award: "Book Award - 2024",
      icon: FaAward
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="neon-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate developer on a journey to create innovative solutions that make a difference
          </p>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="gradient-border card-3d max-w-4xl mx-auto">
            <div className="gradient-border-content p-8">
              <div className="flex items-center mb-6">
                <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                  <FaUser className="text-2xl text-cyan-400" />
                </div>
                <h3 className="text-3xl font-bold text-cyan-400">About Me</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Computer Science Engineering student specializing in Data Science, with a strong foundation in MERN stack development and data structures & algorithms. I love creating innovative web applications that solve real-world problems. Through various projects and certifications, I've developed expertise in full-stack development. I'm always eager to learn new technologies and contribute to meaningful projects that make a positive impact.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-cyan-400 mb-8 flex items-center">
              <FaGraduationCap className="mr-3" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="gradient-border card-3d"
                >
                  <div className="gradient-border-content p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-cyan-500/20 p-3 rounded-lg">
                        <edu.icon className="text-2xl text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-2">
                          {edu.institution}
                        </h4>
                        <p className="text-gray-300 mb-2">{edu.degree}</p>
                        <p className="text-cyan-400 font-semibold">{edu.grade}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-cyan-400 mb-8 flex items-center">
              <FaTrophy className="mr-3" />
              Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="gradient-border card-3d"
                >
                  <div className="gradient-border-content p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-500/20 p-3 rounded-lg">
                        <achievement.icon className="text-2xl text-yellow-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-yellow-400 font-semibold">{achievement.award}</p>
                        {achievement.image && (
                          <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="mt-2 rounded shadow w-65 h-45" // Increased from w-32 to w-40
                          />
                        )}
                        {achievement.linkedin && (
                          <a
                            href={achievement.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mt-2 text-cyan-400 underline"
                          >
                            View on LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
