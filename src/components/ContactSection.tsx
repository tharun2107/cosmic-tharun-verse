
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaExternalLinkAlt, FaRocket } from 'react-icons/fa';

const ContactSection = () => {
  const contactInfo = [
    {
      name: "Email",
      value: "tharunkudikyala@gmail.com",
      url: "mailto:tharunkudikyala@gmail.com",
      icon: FaEnvelope,
      color: "#EA4335"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/tharun-kudikyala",
      url: "https://www.linkedin.com/in/tharun-kudikyala-37124727b/",
      icon: FaLinkedin,
      color: "#0077B5"
    },
    {
      name: "GitHub",
      value: "github.com/tharun2107",
      url: "https://github.com/tharun2107",
      icon: FaGithub,
      color: "#333"
    },
    {
      name: "Portfolio",
      value: "tharun21.netlify.app",
      url: "https://tharun21.netlify.app/",
      icon: FaExternalLinkAlt,
      color: "#00D9FF"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block p-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8"
          >
            <FaRocket className="text-4xl text-cyan-400 floating" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Let's Connect & </span>
            <span className="neon-text">Collaborate</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's build something amazing together!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                boxShadow: `0 0 30px ${contact.color}40`
              }}
              whileTap={{ scale: 0.95 }}
              href={contact.url}
              target={contact.url.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="gradient-border card-3d group cursor-pointer"
            >
              <div className="gradient-border-content p-6 text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${contact.color}20` }}
                >
                  <contact.icon 
                    className="text-3xl"
                    style={{ color: contact.color }}
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">
                  {contact.name}
                </h3>
                
                <p className="text-gray-400 text-sm break-words">
                  {contact.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            href="mailto:tharunkudikyala@gmail.com"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 glow-effect"
          >
            <FaEnvelope className="text-xl" />
            <span>Get In Touch</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
