import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Play, Code, Server, Database } from 'lucide-react';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const projects = [
    {
      title: 'Python Automation Project',
      description: 'A collection of Python scripts and tools for automating various tasks, demonstrating practical automation solutions and scripting techniques.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Automation', 'Scripting'],
      features: [
        'Task automation scripts',
        'Menu-driven utilities',
        'Practical Python examples',
        'Easy to extend and customize'
      ],
      icon: Server,
      color: 'from-green-400 to-blue-500',
      github: 'https://github.com/Aashutoshmalviya55/python_automation',
      demo: 'https://your-demo-link.com',
    },
    {
      title: 'JavaScript Automation',
      description: 'A collection of JavaScript scripts and tools for automating browser and web tasks, demonstrating practical automation solutions and scripting techniques.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript', 'Automation', 'Scripting'],
      features: [
        'Browser automation scripts',
        'Web scraping utilities',
        'Practical JavaScript examples',
        'Easy to extend and customize'
      ],
      icon: Code,
      color: 'from-yellow-400 to-green-500',
      github: 'https://github.com/Aashutoshmalviya55/javascipt_automation',
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
      color: 'from-purple-400 to-blue-500',
      github: 'https://github.com/Aashutoshmalviya55/Devops01',
      demo: 'https://your-demo-link.com',
    },
    {
      title: 'Flask Socket App with CI/CD & Kubernetes',
      description: 'A real-time web application built with Python Flask and the socket library, featuring a complete CI/CD pipeline using Jenkins, Docker, Docker Hub, and Kubernetes for scalable deployment.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Flask', 'Socket', 'Docker', 'Jenkins', 'Docker Hub', 'Kubernetes'],
      features: [
        'Real-time communication with Flask & Socket',
        'Dockerized application with Dockerfile',
        'CI/CD pipeline using Jenkins',
        'Automated builds and push to Docker Hub',
        'Kubernetes deployment for scalability',
        'Sample app.py, Dockerfile, Jenkinsfile included',
      ],
      icon: Database, // Using Database icon for backend/app focus
      color: 'from-blue-500 to-green-400',
      github: 'https://github.com/Aashutoshmalviya55/kubernetes-01-',
      demo: 'https://your-demo-link.com',
    },
    {
      title: 'Microservices System with Flask, PostgreSQL & Redis',
      description: 'A hands-on microservices-based system featuring user registration and fast data access, built with Python Flask, PostgreSQL for storage, Redis for caching, and orchestrated using Docker Compose.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Flask', 'PostgreSQL', 'Redis', 'Docker Compose'],
      features: [
        'User registration API with Flask',
        'Data storage in PostgreSQL',
        'Fast access with Redis cache',
        'Service orchestration using Docker Compose',
        'Separation of concerns via microservices',
        'Sample docker-compose.yml and init.sql included',
      ],
      icon: Server, // Using Server icon for backend/microservices
      color: 'from-green-500 to-yellow-400',
      github: 'https://github.com/Aashutoshmalviya55/Devops2-microservices',
      demo: 'https://your-demo-link.com',
    },
  ];

  return (
    <section id="projects" className="py-14">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
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
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  
                  {/* Project Icon */}
                  <motion.div
                    className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <project.icon className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-3 text-xs leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-slate-800/80 text-blue-400 rounded-full text-xs font-medium border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-white mb-1">Key Features:</h4>
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
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/80 hover:bg-slate-700/80 text-white rounded-lg transition-all duration-300 text-xs font-medium border border-slate-700/50 hover:border-blue-500/50"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={14} />
                      Code
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