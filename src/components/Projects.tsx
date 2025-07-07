import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Play, Code, Server, Database } from 'lucide-react';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const projects = [
    {
      title: 'Linux Command Runner Dashboard',
      description: 'A comprehensive Python + Streamlit application that provides a user-friendly interface for executing Linux commands with real-time output, integrated messaging services, and command history tracking.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Streamlit', 'Linux', 'APIs'],
      features: [
        'Real-time command execution',
        'Interactive dashboard',
        'Messaging integration',
        'Command history tracking'
      ],
      icon: Server,
      color: 'from-green-400 to-blue-500',
      github: 'https://github.com/Aashutoshmalviya55',
      demo: 'https://your-demo-link.com',
    },
    {
      title: 'CI/CD Pipeline Project',
      description: 'A complete DevOps pipeline implementation using modern tools and practices. Features automated testing, containerization, and deployment with comprehensive monitoring and logging.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Git', 'GitHub', 'Flask', 'Docker', 'Jenkins', 'Linux'],
      features: [
        'Automated CI/CD pipeline',
        'Docker containerization',
        'Multi-stage deployment',
        'Pipeline visualization'
      ],
      icon: Code,
      color: 'from-purple-400 to-pink-500',
      github: 'https://github.com/Aashutoshmalviya55',
      demo: 'https://your-demo-link.com',
    },
    {
      title: 'Cloud Infrastructure Manager',
      description: 'Infrastructure as Code solution using Terraform and AWS services. Automates the provisioning and management of cloud resources with proper monitoring and cost optimization.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['AWS', 'Terraform', 'Python', 'CloudWatch'],
      features: [
        'Infrastructure as Code',
        'Auto-scaling capabilities',
        'Cost optimization',
        'Monitoring & alerting'
      ],
      icon: Database,
      color: 'from-yellow-400 to-orange-500',
      github: 'https://github.com/Aashutoshmalviya55',
      demo: 'https://your-demo-link.com',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-slate-900/60 dark:bg-slate-900/60 rounded-2xl backdrop-blur-sm border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-300 overflow-hidden h-full">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  
                  {/* Project Icon */}
                  <motion.div
                    className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-800/80 text-blue-400 rounded-full text-xs font-medium border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="text-slate-400 text-xs space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 hover:bg-slate-700/80 text-white rounded-lg transition-all duration-300 text-sm font-medium border border-slate-700/50 hover:border-blue-500/50"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg transition-all duration-300 text-sm font-medium hover:shadow-lg`}
                      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play size={16} />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;