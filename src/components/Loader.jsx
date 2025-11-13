import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Loader visible for 8 seconds
    const timer = setTimeout(() => setShow(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1.5, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          {/* Wrapper for edge fading */}
          <div className="relative w-[80%] h-[80%] overflow-hidden">
            {/* Soft fade edges using gradient mask */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_60%,rgba(0,0,0,0.8)_100%)] z-10" />

            <motion.video
              src="/video/loding.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } }}
              exit={{
                opacity: 0,
                transition: { duration: 1.5, ease: "easeInOut" },
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
