import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Terminal, 
  Container, 
  Settings, 
  Cloud, 
  GitBranch, 
  Github,
  Server,
  Cpu
} from 'lucide-react';

const Tools: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const tools = [
    {
      name: 'Linux',
      icon: Terminal,
      color: 'from-orange-400 to-red-500',
      description: 'System Administration',
      category: 'OS',
      proficiency: 90,
    },
    {
      name: 'Docker',
      icon: Container,
      color: 'from-blue-400 to-cyan-500',
      description: 'Containerization',
      category: 'DevOps',
      proficiency: 85,
    },
    {
      name: 'Jenkins',
      icon: Settings,
      color: 'from-blue-400 to-purple-500',
      description: 'CI/CD Pipeline',
      category: 'Automation',
      proficiency: 80,
    },
    {
      name: 'AWS',
      icon: Cloud,
      color: 'from-yellow-400 to-orange-500',
      description: 'Cloud Services',
      category: 'Cloud',
      proficiency: 78,
    },
    {
      name: 'Git',
      icon: GitBranch,
      color: 'from-green-400 to-emerald-500',
      description: 'Version Control',
      category: 'VCS',
      proficiency: 88,
    },
    {
      name: 'GitHub',
      icon: Github,
      color: 'from-purple-400 to-indigo-500',
      description: 'Code Repository',
      category: 'Platform',
      proficiency: 87,
    },
    {
      name: 'Kubernetes',
      icon: Server,
      color: 'from-blue-500 to-purple-500',
      description: 'Container Orchestration',
      category: 'DevOps',
      proficiency: 70,
    },
    {
      name: 'Terraform',
      icon: Cpu,
      color: 'from-indigo-400 to-blue-500',
      description: 'Infrastructure as Code',
      category: 'IaC',
      proficiency: 65,
    },
  ];

  return (
    <section id="tools" className="py-20 bg-slate-800/50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Tools I <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Use</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="bg-slate-900/60 dark:bg-slate-900/60 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-300 h-full relative overflow-hidden"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              >
                <div className="text-center relative z-10">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ 
                      rotate: 360, 
                      scale: 1.1,
                      boxShadow: '0 15px 35px rgba(59, 130, 246, 0.4)'
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <tool.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold text-white mb-2"
                    whileHover={{ color: '#60a5fa' }}
                    transition={{ duration: 0.3 }}
                  >
                    {tool.name}
                  </motion.h3>
                  <p className="text-slate-400 text-sm mb-2">{tool.description}</p>
                  {/* Proficiency Progress Bar */}
                  <div className="w-full bg-slate-700 rounded-full h-3 mb-2 overflow-hidden">
                    <motion.div
                      className={`h-3 bg-gradient-to-r ${tool.color} rounded-full relative`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${tool.proficiency}%` } : { width: 0 }}
                      transition={{ 
                        duration: 1.5, 
                        delay: 0.5 + index * 0.1,
                        ease: 'easeOut'
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
                          ease: 'linear'
                        }}
                      />
                    </motion.div>
                  </div>
                  <motion.span 
                    className="text-xs text-slate-500 block mb-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                  >
                    {tool.proficiency}% Proficiency
                  </motion.span>
                  
                  <motion.span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${tool.color} text-white`}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 5px 15px rgba(59, 130, 246, 0.3)'
                    }}
                  >
                    {tool.category}
                  </motion.span>
                </div>
                
                {/* Enhanced Animated Background */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)`,
                  }}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Enhanced Floating Particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      left: `${15 + i * 20}%`,
                      top: `${15 + i * 15}%`,
                    }}
                    animate={{
                      y: [-15, 15, -15],
                      x: [-5, 5, -5],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
                
                {/* Glowing Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  style={{
                    background: `linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.3), transparent)`,
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;