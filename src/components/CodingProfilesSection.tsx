import { motion } from 'framer-motion';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

const CodingProfilesSection = () => {
  const profiles = [
    {
      name: "LeetCode",
      username: "tharun2107",
      url: "https://leetcode.com/tharun2107/",
      icon: SiLeetcode,
      color: "#FFA116",
      description: "Problem solving & algorithms"
    },
    {
      name: "CodeChef",
      username: "tharun2107",
      url: "https://www.codechef.com/users/tharun2107",
      icon: SiCodechef,
      color: "#5B4638",
      description: "Competitive programming"
    },
    {
      name: "SmartInterviews",
      username: "tharun2107",
      url: "https://smartinterviews.in/profile/tharun2107",
      icon: FaCode,
      color: "#FF6B35",
      description: "Interview preparation & DSA"
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
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        bounce: 0.4
      }
    }
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Coding </span>
            <span className="neon-text">Profiles</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where I sharpen my problem-solving skills and tackle coding challenges
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto"
        >
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                rotateY: 15,
                boxShadow: `0 0 40px ${profile.color}60`
              }}
              whileTap={{ scale: 0.95 }}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border card-3d group cursor-pointer w-full md:w-80"
            >
              <div className="gradient-border-content p-8 text-center">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${profile.color}20` }}
                >
                  <profile.icon 
                    className="text-4xl"
                    style={{ color: profile.color }}
                  />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {profile.name}
                </h3>
                
                <p className="text-gray-400 mb-3">
                  @{profile.username}
                </p>
                
                <p className="text-cyan-400 text-sm">
                  {profile.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
