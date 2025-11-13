import React, { useState } from "react";
import {
  FaHome,
  FaCarSide,
  FaTruckMonster,
  FaBolt,
  FaBatteryFull,
  FaMoneyBillAlt,
  FaRoad,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import ModelFooter from "./ModelFooter";

const bmwCars =  [
  {
    model: "BMW 2 Series Gran Coupe",
    image_url: "/carimg/BMW 2 Series Gran Coupe.jpg",
    type: "Sedan",
    engine_type: "Petrol",
    price_ex_showroom_india: "₹45.3 – 47.2 Lakh",
  },
  {
    model: "BMW X1",
    image_url: "/carimg/BMW X1.jpg",
    type: "SUV",
    engine_type: "Petrol/Diesel",
    price_ex_showroom_india: "₹50.8 – 54.3 Lakh",
  },
  {
    model: "BMW iX1",
    image_url: "/carimg/BMW iX1.jpg",
    type: "SUV",
    engine_type: "Electric",
    price_ex_showroom_india: "₹66.9 Lakh",
  },
  {
    model: "BMW 3 Series",
    image_url: "/carimg/BMW 3 Series.jpg",
    type: "Sedan",
    engine_type: "Petrol",
    price_ex_showroom_india: "₹72.9 Lakh",
  },
  {
    model: "BMW 3 Series Gran Limousine",
    image_url: "/carimg/BMW 3 Series Gran Limousine.jpg",
    type: "Sedan",
    engine_type: "Petrol",
    price_ex_showroom_india: "₹60.5 – 61.8 Lakh",
  },
  {
    model: "BMW 5 Series LWB",
    image_url: "/carimg/BMW 5 Series LWB.jpg",
    type: "Sedan",
    engine_type: "Petrol",
    price_ex_showroom_india: "₹72.35 Lakh",
  },
  {
    model: "BMW 6 Series GT",
    image_url: "/carimg/BMW 6 Series GT.jpg",
    type: "Sedan",
    engine_type: "Petrol",
    price_ex_showroom_india: "₹71.9 Lakh",
  },
  {
    model: "BMW 7 Series",
    image_url: "/carimg/BMW 7 Series.jpg",
    type: "Sedan",
    engine_type: "Petrol/Diesel",
    price_ex_showroom_india: "₹1.81 – 1.84 Crore",
  },
  {
    model: "BMW i7",
    image_url: "/carimg/BMW i7.jpg",
    type: "Sedan",
    engine_type: "Electric",
    price_ex_showroom_india: "₹2.05 – 2.58 Crore",
  },
  {
    model: "BMW i4",
    image_url: "/carimg/BMW i4.jpg",
    type: "Sedan",
    engine_type: "Electric",
    price_ex_showroom_india: "₹72.5 – 77.5 Lakh",
  },
  {
    model: "BMW i5",
    image_url: "/carimg/BMW i5.jpg",
    type: "Sedan",
    engine_type: "Electric",
    price_ex_showroom_india: "₹1.20 Crore",
  },
  {
    model: "BMW Z4 Roadster",
    image_url: "/carimg/BMW Z4 Roadster.jpg",
    type: "Convertible",
    engine_type: "Petrol",
    price_ex_showroom_india: "₹87.9 – 92.6 Lakh",
  },
  {
    model: "BMW X3",
    image_url: "/carimg/BMW X3.jpg",
    type: "SUV",
    engine_type: "Diesel",
    price_ex_showroom_india: "₹71.2 – 73.1 Lakh",
  },
  {
    model: "BMW X4",
    image_url: "/carimg/BMW X4.jpg",
    type: "SUV",
    engine_type: "Diesel",
    price_ex_showroom_india: "₹96 Lakh",
  },
  {
    model: "BMW X5",
    image_url: "/carimg/BMW X5.jpg",
    type: "SUV",
    engine_type: "Petrol/Diesel",
    price_ex_showroom_india: "₹93.7 Lakh – 1.05 Crore",
  },
  {
    model: "BMW X6",
    image_url: "/carimg/BMW X6.jpg",
    type: "SUV",
    engine_type: "Petrol",
    price_ex_showroom_india: "₹1.49 Crore",
  },
  {
    model: "BMW X7",
    image_url: "/carimg/BMW X7.jpg",
    type: "SUV",
    engine_type: "Petrol/Diesel",
    price_ex_showroom_india: "₹1.25 – 1.29 Crore",
  },
  {
    model: "BMW XM",
    image_url: "/carimg/BMW XM.jpg",
    type: "SUV",
    engine_type: "Hybrid",
    price_ex_showroom_india: "₹2.55 Crore",
  },
  {
    model: "BMW iX",
    image_url: "/carimg/BMW iX.jpg",
    type: "SUV",
    engine_type: "Electric",
    price_ex_showroom_india: "₹1.40 Crore",
  },
  {
    model: "BMW M2",
    image_url: "/carimg/BMW M2.jpg",
    type: "Coupe",
    engine_type: "Petrol",
    price_ex_showroom_india: "₹99.9 Lakh",
  },
  {
    model: "BMW M3 Competition",
    image_url: "/carimg/BMW M3 Competition.jpg",
    type: "Sedan",
    engine_type: "Petrol",
    price_ex_showroom_india: "₹1.47 Crore",
  },
  {
    model: "BMW M4 Competition",
    image_url: "/carimg/BMW M4 Competition.jpg",
    type: "Coupe",
    engine_type: "Petrol",
    price_ex_showroom_india: "₹1.52 Crore",
  },
  {
    model: "BMW M5 Competition",
    image_url: "/carimg/BMW M5 Competition.jpg",
    type: "Sedan",
    engine_type: "Petrol",
    price_ex_showroom_india: "₹2.01 Crore",
  },
  {
    model: "BMW M8 Coupe Competition",
    image_url: "/carimg/BMW M8 Coupe Competition.jpg",
    type: "Coupe",
    engine_type: "Petrol",
    price_ex_showroom_india: "₹2.38 Crore",
  },
  {
    model: "BMW iX3",
    image_url: "/carimg/BMW iX3.jpg",
    type: "SUV",
    engine_type: "Electric",
    price_ex_showroom_india: "₹80 Lakh",
  },
  {
    model: "BMW i3 (Discontinued)",
    image_url: "/carimg/BMW i3 (Discontinued).jpg",
    type: "Hatchback",
    engine_type: "Electric",
    price_ex_showroom_india: "₹45 Lakh (approx)",
  },
  {
    model: "BMW X2",
    image_url: "/carimg/BMW X2.jpg",
    type: "SUV",
    engine_type: "Petrol",
    price_ex_showroom_india: "₹48 Lakh",
  },
  {
    model: "BMW X8 (Upcoming)",
    image_url: "/carimg/BMW X8 (Upcoming).jpg",
    type: "SUV",
    engine_type: "Hybrid",
    price_ex_showroom_india: "₹2.5 – 3 Crore (expected)",
  },
  {
    model: "BMW 8 Series Gran Coupe",
    image_url: "/carimg/BMW 8 Series Gran Coupe.jpg",
    type: "Sedan",
    engine_type: "Petrol",
    price_ex_showroom_india: "₹1.62 – 1.88 Crore",
  },
  {
    model: "BMW i Vision Dee (Concept)",
    image_url: "/carimg/BMW i Vision Dee (Concept).jpg",
    engine_type: "Electric",
    price_ex_showroom_india: "Concept Model",
  },
];;

export default function Models() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState(null);

  const menuItems = [
    { name: "All", icon: <FaHome /> },
    { name: "Sedan", icon: <FaCarSide /> },
    { name: "SUV", icon: <FaTruckMonster /> },
    { name: "Electric", icon: <FaBolt /> },
    { name: "Hybrid", icon: <FaBatteryFull /> },
    { name: "Convertible", icon: <FaRoad /> },
    { name: "Price", icon: <FaMoneyBillAlt /> },
  ];

  // Helper to extract numeric price (for sorting)
  const extractPriceValue = (priceStr) => {
    if (!priceStr) return 0;
    const clean = priceStr
      .replace(/[₹,–]/g, "")
      .replace(/[A-Za-z()]/g, "")
      .trim();
    const parts = clean.split(" ");
    const first = parseFloat(parts[0]);
    if (priceStr.includes("Crore")) return first * 100;
    return first;
  };

  // Safe filtering logic (fixes undefined.includes() error)
  let filteredCars = bmwCars.filter((car) => {
    if (selectedCategory === "All") return true;

    const type = car.type || "";
    const engine = car.engine_type || "";

    return (
      type.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      engine.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  });

  // Sorting by price
  if (selectedCategory === "Price" && sortOrder) {
    filteredCars.sort((a, b) => {
      const priceA = extractPriceValue(a.price_ex_showroom_india);
      const priceB = extractPriceValue(b.price_ex_showroom_india);
      return sortOrder === "lowToHigh" ? priceA - priceB : priceB - priceA;
    });
  }

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 pt-20">
      <Navbar />

      {/* Sidebar */}
      <aside className="w-52 bg-gray-100 flex flex-col items-start py-6 px-4 shadow-md border-r border-gray-300 sticky top-20 h-screen rounded-r-md">
        <div className="mb-10 w-full flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
            alt="BMW Logo"
            className="w-16 h-16"
          />
          <h2 className="text-lg font-bold mt-2 text-gray-800">BMW</h2>
        </div>

        <nav className="flex flex-col items-start gap-4 w-full">
          {menuItems.map((item) => (
            <div key={item.name} className="w-full relative">
              <button
                onClick={() => {
                  setSelectedCategory(item.name);
                  if (item.name !== "Price") setSortOrder(null);
                }}
                className={`flex items-center gap-3 w-full py-3 px-3 rounded-md transition-all duration-300 transform ${
                  selectedCategory === item.name
                    ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white scale-105 shadow-sm"
                    : "hover:bg-gray-200 text-gray-700"
                }`}
              >
                <div className="text-2xl">{item.icon}</div>
                <span className="text-sm font-medium">{item.name}</span>
              </button>

              {/* Price dropdown */}
              {item.name === "Price" && selectedCategory === "Price" && (
                <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-sm z-10">
                  <button
                    onClick={() => setSortOrder("lowToHigh")}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Sort: Low → High
                  </button>
                  <button
                    onClick={() => setSortOrder("highToLow")}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Sort: High → Low
                  </button>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-auto text-gray-500 text-xs pt-8 w-full text-center">
          © 2025 BMW
        </div>
      </aside>

      {/* Main Section */}
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold tracking-wide text-gray-900 uppercase">
            Explore BMW Models
          </h1>
          <p className="text-gray-600 mt-3 text-sm italic">
            “Sheer Driving Pleasure” — Innovation, Power & Elegance crafted by BMW.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredCars.map((car, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 rounded-md"
            >
              <div className="overflow-hidden bg-gray-100">
                <img
                  src={car.image_url}
                  alt={car.model}
                  className="w-full h-48 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {car.model}
                </h3>
                <p className="text-sm text-gray-600">
                  Type: {car.type || "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  Engine: {car.engine_type || "N/A"}
                </p>
                <p className="text-base font-bold text-blue-500 mt-2">
                  {car.price_ex_showroom_india}
                </p>
              </div>
            </div>
          ))}
        </div>
        <ModelFooter modelName="BMW" />
      </main>
       
    </div>
  );
}
