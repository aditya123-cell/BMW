import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const videos = [
  {
    title: "The Essence of Luxury",
    detail:
      "Step inside a world crafted with perfection — where elegance and innovation merge effortlessly.",
    src: "/video/luxury.mp4",
  },
  {
    title: "Unleash the Power Within",
    detail:
      "Feel the raw strength that defines every BMW engine — precision tuned for pure adrenaline.",
    src: "/video/power.mp4",
  },
  {
    title: "Engineered for Excellence",
    detail:
      "Dynamic handling, superior balance — experience performance that adapts to your every move.",
    src: "/video/excellence.mp4",
  },
  {
    title: "Driven by Innovation",
    detail:
      "Intelligence meets emotion. Technology that anticipates your every desire.",
    src: "video/innovation.mp4",
  },
];

export default function Experience() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);
  const progressControls = useAnimation();

  // Move to next video
  const handleVideoEnd = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  // Manual change on click
  const handleScreenClick = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  // Handle smooth progress for each video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startProgress = () => {
      const duration = video.duration || 6; // fallback if metadata not loaded
      progressControls.set({ width: "0%" });
      progressControls.start({
        width: "100%",
        transition: { duration, ease: "linear" },
      });
    };

    // ✅ Reset and trigger immediately on every change
    progressControls.set({ width: "0%" });

    // If video already loaded — start immediately
    if (video.readyState >= 1) {
      startProgress();
    } else {
      video.addEventListener("loadedmetadata", startProgress);
    }

    // Also make sure progress restarts on play
    video.addEventListener("play", startProgress);

    return () => {
      video.removeEventListener("loadedmetadata", startProgress);
      video.removeEventListener("play", startProgress);
    };
  }, [current]);

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-black"
      onClick={handleScreenClick}
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.video
            key={videos[current].src}
            ref={videoRef}
            src={videos[current].src}
            autoPlay
            muted
            onEnded={handleVideoEnd}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute inset-x-0 bottom-28 px-8 md:px-16 z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={videos[current].title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl text-left text-white"
          >
            <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-3">
              {videos[current].title}
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              {videos[current].detail}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bars */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
        {videos.map((_, i) => (
          <div
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(i);
            }}
            className={`relative cursor-pointer rounded-full transition-all duration-300 overflow-hidden ${
              current === i ? "w-16 h-[4px]" : "w-8 h-[2px]"
            } bg-white/20`}
          >
            {current === i && (
              <motion.div
                animate={progressControls}
                className="absolute left-0 top-0 h-full rounded-full shadow-[0_0_10px_2px_rgba(59,130,246,0.7)]"
                style={{
                  background:
                    "linear-gradient(90deg, #007aff 0%, #ffffff 100%)",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
    
  );
}
