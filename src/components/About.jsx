import React from "react";
import { motion } from "framer-motion";

const aboutSections = [
  {
    title: "Our Legacy",
    content:
      "For over a century, BMW has been a symbol of automotive excellence. Founded in 1916, BMW has consistently pushed the boundaries of performance and design. From the iconic BMW 328 to the modern-day 7 Series, each vehicle embodies precision engineering, elegance, and a passion for driving. Our commitment to innovation, quality, and sustainability continues to define the ultimate driving experience for generations of enthusiasts around the world.",
    image: "/BMW/BMW/image/l.jpg",
  },
  {
    title: "Innovation & Technology",
    content:
      "BMW leads the industry in automotive innovation, integrating cutting-edge technologies into every vehicle. From intelligent driver assistance systems and AI-powered navigation to sustainable electric mobility with the BMW i series, we redefine what driving means in the modern era. Safety, efficiency, and comfort are enhanced through advanced engineering, ensuring that every journey is not only exhilarating but also intelligently designed.",
    image: "/BMW/image/i.jpg",
  },
  {
    title: "Experience Driving",
    content:
      "Every BMW is meticulously crafted to deliver an unforgettable driving experience. With dynamic handling, responsive engines, and perfectly balanced chassis, every corner becomes a thrill. The interior blends luxury and technology seamlessly, offering comfort, connectivity, and an intuitive interface. From the roar of the engine to the precise steering, every detail is designed to connect driver and machine in perfect harmony, delivering pure driving pleasure.",
    image: "/BMW/image/d.jpg",
  },
];

const About = () => {
  return (
    <section className="w-full bg-black text-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen bg-[url('/images/bmw-hero.jpg')] bg-cover bg-center flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-8 md:px-16"
        >
          <h1 className="text-4xl md:text-6xl font-light mb-4">About BMW</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            Discover the story behind the ultimate driving machines, where
            innovation meets passion, heritage meets modernity, and every
            detail defines excellence.
          </p>
        </motion.div>
      </div>

      {/* About Sections */}
      <div className="px-8 md:px-16 py-16 space-y-32">
        {aboutSections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              idx % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                {section.title}
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
                {section.content}
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 px-8 md:px-16 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">About BMW</h3>
            <p className="text-gray-400 text-sm">
              BMW is committed to delivering premium driving experiences with
              innovation, design, and sustainability at its core.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Phone: +91 1234 567 890</li>
              <li>Email: info@bmw.com</li>
              <li>Address: Munich, Germany</li>
            </ul>
          </div>

          {/* Socials Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Models
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Experience
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Offers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} BMW. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

export default About;
