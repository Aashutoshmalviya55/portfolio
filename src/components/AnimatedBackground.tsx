import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main animated gradient background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
        }}
        animate={{
          backgroundPosition: [
            '0% 50%',
            '100% 50%',
            '0% 50%'
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {/* Floating Blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#a78bfa]/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#38bdf8]/20 rounded-full blur-3xl"
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#f472b6]/20 rounded-full blur-3xl"
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -150, 50, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {/* Animated Stars */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'blur(0.5px)'
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;