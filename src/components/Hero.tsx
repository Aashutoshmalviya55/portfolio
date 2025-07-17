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
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #ff4e50, #f9d423)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
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
                className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{
                  background: 'linear-gradient(to right, #43e97b, #38f9d7)',
                  color: '#fff',
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(56, 249, 215, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
              >
                Explore My Work
              </motion.button>
              <motion.button
                className="px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300"
                style={{
                  border: '2px solid #38f9d7',
                  color: '#38f9d7',
                  boxShadow: '0 0 0 0 #38f9d7',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 16px 4px #38f9d7',
                  backgroundColor: 'rgba(56, 249, 215, 0.1)',
                  color: '#fff',
                }}
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