import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#1e293b] dark:from-[#0f172a] dark:via-[#312e81] dark:to-[#1e293b]" />
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
          ease: "easeInOut",
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
          ease: "easeInOut",
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
          ease: "easeInOut",
        }}
      />
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#38bdf8]/10 to-transparent animate-pulse" />
    </div>
  );
};

export default AnimatedBackground;