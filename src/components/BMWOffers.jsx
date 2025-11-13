import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer"; // Footer include

const offers = [
  {
    title: "BMW 3 Series",
    description: "Get up to ₹5 Lakh cashback on select models.",
    image: "/carimg/BMW 3 Series.jpg",
  },
  {
    title: "BMW X5",
    description: "Special lease offers starting at ₹1.2 Lakh/month.",
    image: "/carimg/BMW X5.jpg",
  },
  {
    title: "BMW iX",
    description: "Electric mobility with attractive finance options.",
    image: "/carimg/BMW iX.jpg",
  },
  {
    title: "BMW M4",
    description: "Experience pure performance with exclusive discounts.",
    image: "/carimg/BMW M4 Competition.jpg",
  },
];

const BMWOffers = () => {
  return (
    <section className="w-full bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center">
          BMW Offers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-900 rounded-xl overflow-hidden cursor-pointer flex flex-col"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col items-start">
                <h3 className="text-2xl font-semibold text-white mb-2">{offer.title}</h3>
                <p className="text-gray-400 text-sm">{offer.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default BMWOffers;
