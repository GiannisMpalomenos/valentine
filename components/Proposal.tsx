import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NO_PHRASES, IMAGES } from '../constants';

interface ProposalProps {
  onAccept: () => void;
}

const Proposal: React.FC<ProposalProps> = ({ onAccept }) => {
  const [noCount, setNoCount] = useState(0);
  
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoText = () => {
    return NO_PHRASES[Math.min(noCount, NO_PHRASES.length - 1)];
  };

  // Calculate dynamic size for the Yes button
  // Base 1rem (16px), grows by 20px per click roughly
  const yesButtonSize = noCount * 20 + 16; 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen z-10 relative p-4 w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
            key="image-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
        >
            <img 
            src={IMAGES.BEAR_ASKING} 
            alt="Please?" 
            className="w-48 h-48 md:w-64 md:h-64 rounded-3xl shadow-xl border-4 border-white object-cover animate-float"
            />
        </motion.div>
      </AnimatePresence>

      <h1 className="font-pacifico text-3xl md:text-5xl text-valentine-700 mb-12 text-center drop-shadow-sm">
        Will you be my Valentine?
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 w-full">
        {/* Yes Button */}
        <motion.button
          className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-50 min-w-[100px] min-h-[50px]"
          style={{ 
             fontSize: yesButtonSize,
             padding: `${noCount * 2 + 10}px ${noCount * 5 + 24}px`
          }}
          onClick={onAccept}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Yes
        </motion.button>

        {/* No Button */}
        <motion.button
          className="bg-red-500 hover:bg-red-600 text-white font-fredoka font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300"
          onClick={handleNoClick}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: 0 }}
          animate={{ x: 0 }}
        >
          {getNoText()}
        </motion.button>
      </div>
      
      {noCount > 0 && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 font-fredoka text-valentine-800 text-lg italic"
          >
              (θα πεθάνεις)
          </motion.p>
      )}
    </div>
  );
};

export default Proposal;