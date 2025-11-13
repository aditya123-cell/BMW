import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    name: "BMW 3 Series",
    image_url: "/image/1.jpg",
    details: "The BMW 3 Series is a popular compact luxury sedan, known for its excellent driving dynamics and premium cabin."
  },
  {
    name: "BMW X1",
    image_url: "/image/2.jpg",
    details: "The BMW X1 is a compact SUV that offers a perfect balance of urban usability and luxury."
  },
  {
    name: "BMW X3",
   image_url: "/image/3.jpg",
    details: "The BMW X3 is a mid-size luxury SUV, providing sedan-like driving dynamics and increasing popularity worldwide."
  },
  {
    name: "BMW X5",
   image_url: "/image/4.jpg",
    details: "The BMW X5 is a mid-size luxury SUV that also functions well as an action-family car."
  },
  {
    name: "BMW 5 Series",
    image_url: "/image/5.jpg",
    details: "The BMW 5 Series is an elite sedan that combines performance, technology, and comfort."
  },
  {
    name: "BMW 7 Series",
    image_url: "/image/6.jpg",
    details: "The BMW 7 Series is BMW's flagship sedan, featuring the most premium features and luxury."
  },

  {
    name: "BMW i4",
   image_url: "/image/7.jpg",
    details: "The BMW i4 is an electric sedan that showcases BMW’s future EV product lineup."
  },
  {
    name: "BMW Z4",
   image_url: "/image/8.jpg",
    details: "The BMW Z4 is a sports roadster for driving enthusiasts, featuring an open top and fun features."
  },
  {
    name: "BMW XM",
   image_url: "/image/9.jpg",
    details: "The BMW XM is a high-performance SUV and the premium model of BMW’s 'M' sports branch."
  }
];

export default function SplitImageScroll() {
  const [hovered, setHovered] = useState(null);

  const handleMoreDetails = (card) => {
    alert(`More details about ${card.name}`);
    // Future: you can open a modal or navigate to another page
  };

  return (
    <section className="w-full h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Horizontal scroll area */}
      <div className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="snap-center shrink-0 w-screen h-screen flex items-center justify-between px-16"
          >
            {/* Left Text */}
            <div className="w-1/2 h-full flex flex-col justify-center">
              <motion.h1
                className="text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: hovered === i ? 1 : 0.8, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {card.name}
              </motion.h1>
              <motion.p
                className="text-xl text-white max-w-lg leading-relaxed mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: hovered === i ? 1 : 0.7, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {card.details}
              </motion.p>

              {/* More Details Button */}
              <button
                onClick={() => handleMoreDetails(card)}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 w-max"
              >
                More Details
              </button>
            </div>

            {/* Right Image Card */}
            <div
              className="relative w-[50%] h-[70%] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={card.image_url}
                alt={card.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
