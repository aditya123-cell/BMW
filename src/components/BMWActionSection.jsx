import React from "react";
import { FaCar, FaCalendarCheck, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const ActionCards = [
  {
    title: "Find Your BMW",
    icon: <FaCar size={36} />,
    description: "Explore the full BMW range and find your perfect car.",
  },
  {
    title: "Book Test Drive",
    icon: <FaCalendarCheck size={36} />,
    description: "Schedule a personalized test drive at your convenience.",
  },
  {
    title: "Build Your Own",
    icon: <FaTools size={36} />,
    description: "Customize your BMW with options, colors, and features.",
  },
];

const BMWActionSection = () => {
  return (
    <section className="w-full h-[50vh] bg-black flex items-center justify-center">
      <div className="max-w-6xl w-full px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {ActionCards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-900 rounded-xl p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl"
          >
            <div className="text-white mb-4">{card.icon}</div>
            <h3 className="text-xl md:text-2xl text-white font-semibold mb-2">
              {card.title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BMWActionSection;
