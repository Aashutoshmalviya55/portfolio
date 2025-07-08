import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import profileImg from '../assets/passport.jpg';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['DevOps Enthusiast', 'Python Developer', 'Cloud Learner'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center py-16">
          {/* Left: Profile Photo */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div
              className="relative"
            >
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-slate-900 dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Aashutosh Malviya"
                    className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-lg transition-all duration-300"
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <div className="z-10 flex flex-col items-center lg:items-start text-center lg:text-left justify-center h-full">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent"
            >
              Aashutosh Malviya
            </h1>

            <div
              className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-6 h-12 flex items-center justify-center lg:justify-start"
            >
              <span className="mr-2">I'm a</span>
              <span
                className="text-blue-400 font-semibold relative"
              >
                {roles[currentRole]}
              </span>
            </div>

            <p
              className="text-lg text-slate-400 max-w-xl mb-8 mx-auto lg:mx-0"
            >
              Welcome to my digital portfolio! I'm passionate about DevOps, cloud technologies, 
              and building scalable solutions. Let's create something amazing together.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
              >
                Explore My Work
              </motion.button>
              <motion.button
                className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;