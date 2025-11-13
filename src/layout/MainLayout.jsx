import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Loader from "../components/Loader";
import Experience from "../components/experience";
import Footer from "../components/Footer";
import BMWActionSection from "../components/BMWActionSection";
const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/"; // ✅ Home page check

  const [showLoader, setShowLoader] = useState(true);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Reset path to "/" on page reload
  useEffect(() => {
    if (performance.getEntriesByType("navigation")[0].type === "reload") {
      if (window.location.pathname !== "/") {
        window.history.replaceState({}, "", "/");
      }
    }
  }, []);

  useEffect(() => {
    // Loader sirf initial page load pe 8 sec dikhaye
    const loaderTimer = setTimeout(() => setShowLoader(false), 8000);
    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <div className="relative h-screen w-full">
      {/* Loader */}
      {showLoader && <Loader />}

      {/* Navbar sirf Loader ke baad show hoga */}
      {!showLoader && <Navbar />}

      {/* Page content */}
      <Outlet />

      {/* Home page specific components */}
      {!showLoader && isHome && (
        <>
          <Background />
          <div className="w-full h-[2px] bg-black"></div>
          <Experience />
          <BMWActionSection/>
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainLayout;
