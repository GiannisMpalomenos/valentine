import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';
import { Sparkles, Heart } from 'lucide-react';

const Celebration: React.FC = () => {
  useEffect(() => {
    // Fire confetti
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center min-h-screen z-10 relative p-4 text-center"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mb-8 relative"
      >
         <div className="absolute -top-12 -left-12 text-valentine-500 animate-bounce delay-100">
            <Heart fill="currentColor" size={48} />
         </div>
         <div className="absolute -top-8 -right-12 text-valentine-400 animate-bounce delay-300">
            <Heart fill="currentColor" size={32} />
         </div>

        <img 
          src={IMAGES.CATS_HUGGING} 
          alt="Celebration" 
          className="rounded-3xl shadow-2xl border-4 border-white w-64 h-64 object-cover"
        />
      </motion.div>

      <h1 className="font-pacifico text-4xl md:text-6xl text-valentine-600 mb-6 drop-shadow-sm">
        Ήμουν σίγουρος Λαουρίτα ❤️❤️❤️❤️
      </h1>
      
      <p className="font-fredoka text-xl text-valentine-800 max-w-md bg-white/50 p-6 rounded-2xl backdrop-blur-sm shadow-sm">
        Σε απεχθάνομαι ΠΟΛΥ!
      </p>

      <motion.div 
        className="mt-8 flex gap-2 text-valentine-500"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Sparkles />
        <span className="font-fredoka font-semibold">Love you!</span>
        <Sparkles />
      </motion.div>
    </motion.div>
  );
};

export default Celebration;