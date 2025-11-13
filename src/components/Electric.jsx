import React, { useRef } from "react";
import { motion } from "framer-motion";
import ElectricFooter from "./ElectricFooter"; // ⚡ Footer import

const Electric = () => {
  const benefits = [
    { title: "Zero Emission, 100% Performance", video: "/video/e1.mp4" },
    { title: "Smooth, Silent and Effortless Drive", video: "/video/e4.mp4" },
    { title: "Instant Torque for Pure Driving Pleasure", video: "/video/e3.mp4" },
    { title: "Charging the Future — Efficient and Intelligent", video: "/video/e.2.mp4" },
  ];

  return (
    <section className="w-full bg-white text-black">
      {/* Intro Text */}
      <div className="text-center py-16 px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm md:text-base uppercase tracking-[4px] text-gray-600 mb-3"
        >
          Introducing
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-semibold mb-4 leading-tight"
        >
          The New <span className="text-blue-600">BMW Electric Vision</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-gray-700 max-w-2xl mx-auto"
        >
          A revolution in motion — BMW’s electric lineup blends dynamic
          performance with responsible innovation, giving you unmatched luxury
          and efficiency on every journey.
        </motion.p>
      </div>

      {/* Benefit Sections */}
      {benefits.map((item, index) => {
        const videoRef = useRef(null);

        const handleMouseEnter = () => {
          videoRef.current && videoRef.current.play();
        };
        const handleMouseLeave = () => {
          videoRef.current && videoRef.current.pause();
          videoRef.current.currentTime = 0;
        };

        return (
          <section
            key={index}
            className="relative w-full h-[70vh] my-20 overflow-hidden group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background Video */}
            <video
              ref={videoRef}
              src={item.video}
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>

            {/* Text */}
            <div
              className={`relative z-10 h-full flex items-center ${
                index % 2 === 0 ? "justify-start pl-12" : "justify-end pr-12"
              }`}
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05, color: "#3b82f6" }}
                className={`text-3xl md:text-5xl font-semibold text-white max-w-md ${
                  index % 2 === 0 ? "text-left" : "text-right"
                }`}
              >
                {item.title}
              </motion.h2>
            </div>
          </section>
        );
      })}

      {/* ⚡ Footer */}
      <ElectricFooter />
    </section>
  );
};

export default Electric;
