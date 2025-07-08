import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  User,
  MessageCircle
} from 'lucide-react';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '6267907637',
      href: 'tel:6267907637',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'aashutoshmalviya19@gmail.com',
      href: 'mailto:aashutoshmalviya19@gmail.com',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/aashutosh-malviya',
      href: 'https://linkedin.com/in/aashutosh-malviya',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Aashutoshmalviya55',
      href: 'https://github.com/Aashutoshmalviya55',
      color: 'from-purple-400 to-pink-500'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/50 dark:bg-slate-800/50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
              Ready to start a conversation? I'd love to hear from you. Whether you have a question, 
              opportunity, or just want to say hello, feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-slate-900/60 dark:bg-slate-900/60 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/30 hover:border-blue-500/50 group"
                      whileHover={{ scale: 1.02, x: 10 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <motion.div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      <div>
                        <h4 className="text-white font-medium">{item.label}</h4>
                        <p className="text-slate-400 text-sm group-hover:text-blue-400 transition-colors duration-200">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Quick Message */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                  <h4 className="text-white font-semibold mb-2">💼 Open to Opportunities</h4>
                  <p className="text-slate-400 text-sm">
                    I'm actively seeking DevOps Engineer positions where I can contribute to 
                    building scalable infrastructure and implementing efficient CI/CD pipelines.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              <div className="bg-slate-900/60 dark:bg-slate-900/60 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Your Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your name"
                      whileFocus={{ scale: 1.03, boxShadow: '0 0 0 2px #3b82f6' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Your Email
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                      whileFocus={{ scale: 1.03, boxShadow: '0 0 0 2px #3b82f6' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      <MessageCircle className="inline w-4 h-4 mr-2" />
                      Your Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                      whileFocus={{ scale: 1.02, boxShadow: '0 0 0 2px #3b82f6' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md"
                    whileHover={{ scale: 1.04, boxShadow: '0 6px 24px 0 rgba(139,92,246,0.25)' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="flex justify-center space-x-6 mb-6">
              {[
                    { icon: Linkedin, href: 'https://linkedin.com/in/aashutosh-malviya', color: 'hover:text-blue-400' },
    { icon: Github, href: 'https://github.com/Aashutoshmalviya55', color: 'hover:text-purple-400' },
                { icon: Mail, href: 'mailto:aashutoshmalviya19@gmail.com', color: 'hover:text-green-400' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-400 ${social.color} transition-all duration-300`}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
            
            <p className="text-slate-400 text-sm">
                              © 2024 Aashutosh Malviya. Built with React, TypeScript, and Framer Motion.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;