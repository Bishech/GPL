import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { MainLayout } from "./components/MainLayout";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { TeamInfo } from "./pages/TeamInfo";
import { PlayerInfo } from "./pages/PlayerInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "team/:group/:name",
        element: <TeamInfo />,
      },
      {
        path: "player/:teamName/:playerName",
        element: <PlayerInfo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
