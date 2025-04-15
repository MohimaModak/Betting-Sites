import React from "react"; // Explicitly import React
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./assets/Component/Home/Home";
import './index.css';
import Contact from "./assets/Component/Contact/Contact";
import Why from "./assets/Component/Why/Why";
import OurSiteList from "./assets/Component/OurSiteList/OurSiteList";
import AboutUs from "./assets/Component/AboutUs/AboutUs";

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
        path: "/AboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/OurSiteList",
        element: <OurSiteList></OurSiteList>,
      },
      {
        path: "/Why",
        element: <Why></Why>,
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
