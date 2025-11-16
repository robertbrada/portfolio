import * as React from 'react';
import { useState, useRef } from 'react';
import { motion, useDomEvent } from 'framer-motion';
import trezor from '../assets/images/trezor/trade.png';

const transition = {
  type: 'spring' as const,
  damping: 25,
  stiffness: 200,
};

export const Image = () => {
  const [isOpen, setOpen] = useState(false);

  useDomEvent(useRef(window), 'scroll', () => isOpen && setOpen(false));

  // Function to handle the Escape key press
  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Escape' && isOpen) {
      setOpen(false);
    }
  };

  // Adding the event listener for keydown when the component mounts
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      className={`image-container ${isOpen ? 'open' : ''}`}
      // hover:scale-[1.02] transition-all duration-100
    >
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={transition}
        className="shade"
        onClick={() => setOpen(false)}
      />
      <motion.img
        src={trezor}
        alt="Bimhuis in Amsterdam"
        onClick={() => setOpen(!isOpen)}
        layout
        transition={transition}
      />
    </div>
  );
};
