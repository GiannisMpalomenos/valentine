import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FloatingHeart } from '../types';

const Background: React.FC = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    // Generate static random hearts on mount to avoid hydration mismatch/re-render flicker
    const newHearts: FloatingHeart[] = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-valentine-200/40"
          initial={{ 
            x: `${heart.left}vw`, 
            y: '110vh',
            scale: heart.scale,
            rotate: 0
          }}
          animate={{ 
            y: '-10vh',
            rotate: 360 
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear"
          }}
          style={{
            fontSize: `${Math.max(20, heart.scale * 50)}px`
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default Background;