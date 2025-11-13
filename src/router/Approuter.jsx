import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Otherlayouts from "../layout/Otherlayouts";
import Models from "../components/Models";
import Electric from "../components/Electric";
import About from "../components/About";
import BMWOffers from "../components/BMWOffers";

const Approuter = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "",
            element: <Otherlayouts />,
            children: [
              { path: "model", element: <Models /> },
              { path: "electric", element: <Electric /> },
              { path: "offers", element: <BMWOffers /> },
              { path: "about", element: <About /> },
            ],
          },
        ],
      },
    ],
    { basename: "/BMW/" } // <-- Ye sahi jagah hai
  );

  return <RouterProvider router={router} />;
};

export default Approuter;
