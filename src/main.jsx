import React from "react"; // Explicitly import React
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./assets/Component/Home/Home";
import './index.css';
import Shop from "./assets/Component/Shop/Shop";
import Services from "./assets/Component/Services/Services";
import Community from "./assets/Component/Community/Community";
import AdoptPet from "./assets/Component/AdoptPet/AdoptPet";
import Testimonials from "./assets/Component/Testimonials/Testimonials";
import Blog from "./assets/Component/Blog/Blog";
import Contact from "./assets/Component/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Shop",
        element: <Shop></Shop>,
      },
      {
        path: "/Services",
        element: <Services></Services>,
      },
      {
        path: "/AdoptPet",
        element: <AdoptPet></AdoptPet>,
      },
      {
        path: "/Community",
        element: <Community></Community>,
      },
      {
        path: "/Testimonials",
        element: <Testimonials></Testimonials>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>
      },
      {
        path: "/Contact",
        element: <Contact></Contact>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
