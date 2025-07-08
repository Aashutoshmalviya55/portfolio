import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Globe, Zap } from 'lucide-react';

const Languages: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const languages = [
    {
      name: 'Python',
      icon: Code,
      color: 'from-green-400 to-blue-500',
      description: 'Scripting & Development',
      level: 85,
    },
    {
      name: 'JavaScript',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      description: 'Frontend & Backend',
      level: 75,
    },
    {
      name: 'HTML/CSS',
      icon: Globe,
      color: 'from-orange-400 to-red-500',
      description: 'Web Development',
      level: 80,
    },
    {
      name: 'DBMS',
      icon: Database,
      color: 'from-purple-400 to-pink-500',
      description: 'Database Management',
      level: 70,
    },
  ];

  return (
    <section id="languages" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Languages I <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Know</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="bg-slate-900/60 dark:bg-slate-900/60 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-300 h-full"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              >
                <div className="text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${language.color} flex items-center justify-center`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <language.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold text-white mb-2"
                    whileHover={{ color: '#60a5fa' }}
                    transition={{ duration: 0.3 }}
                  >
                    {language.name}
                  </motion.h3>
                  <p className="text-slate-400 text-sm mb-4">{language.description}</p>
                  
                  {/* Enhanced Progress Bar */}
                  <div className="w-full bg-slate-700 rounded-full h-3 mb-2 overflow-hidden">
                    <motion.div
                      className={`h-3 bg-gradient-to-r ${language.color} rounded-full relative`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${language.level}%` } : { width: 0 }}
                      transition={{ 
                        duration: 1.5, 
                        delay: 0.5 + index * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1 + index * 0.1,
                          ease: "linear"
                        }}
                      />
                    </motion.div>
                  </div>
                  <motion.span 
                    className="text-xs text-slate-500"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                  >
                    {language.level}% Proficiency
                  </motion.span>
                </div>
                
                {/* Enhanced Hover Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;