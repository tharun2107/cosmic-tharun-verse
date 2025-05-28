
import { motion } from 'framer-motion';
import { FaDownload, FaRocket } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-block p-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8"
          >
            <FaRocket className="text-4xl text-cyan-400 floating" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="neon-text bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tharun Kudikayala
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            <span className="text-cyan-400 font-semibold">MERN Stack Developer</span> &{' '}
            <span className="text-cyan-400 font-semibold">DSA Enthusiast</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1K-q13_z9S-IQ7D6TkQx3GiIKBxRdSyHh/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 glow-effect"
            >
              <FaDownload className="text-xl" />
              <span>Download Resume</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center space-x-3 border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              <span>Explore My Work</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-500/20 rounded-full floating-delayed"
        />
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-500/20 rounded-full floating"
        />
      </div>
    </section>
  );
};

export default HeroSection;
