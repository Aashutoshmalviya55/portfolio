import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section id="about" className="py-20 bg-slate-800/50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              className="bg-slate-900/60 dark:bg-slate-900/60 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.1)' }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                I am a fresher and passionate about DevOps. I'm actively looking for a DevOps Engineer 
                opportunity where I can apply my knowledge of CI/CD, containers, and cloud services.
              </p>
            </motion.div>

            <motion.div
              className="bg-slate-900/60 dark:bg-slate-900/60 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.1)' }}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">What Drives Me</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                My goal is to build efficient, scalable systems that make a real impact.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            {/* Skills Progress */}
            <div className="bg-slate-900/60 dark:bg-slate-900/60 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Core Competencies</h3>
              
              {[
                { skill: 'DevOps Practices', level: 75 },
                { skill: 'Python Development', level: 85 },
                { skill: 'Cloud Technologies', level: 70 },
                { skill: 'CI/CD Pipelines', level: 80 },
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  className="mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 font-medium">{item.skill}</span>
                    <span className="text-blue-400 font-bold">{item.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '10+', label: 'Projects Completed' },
                { number: '2+', label: 'Years Learning' },
                { number: '5+', label: 'Technologies' },
                { number: '100%', label: 'Dedication' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-slate-900/60 dark:bg-slate-900/60 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 text-center hover:border-blue-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: '0 5px 20px rgba(59, 130, 246, 0.1)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;