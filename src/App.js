import React from "react";
//import "./style.css";
import Header from "./components/Header";
// import { Body } from "./components/Body";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraunts/:id",
        element: <RestrauntMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
