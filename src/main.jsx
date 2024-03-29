import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { MainLayout } from "./components/MainLayout";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { TeamInfo } from "./pages/TeamInfo";
import { PlayerInfo } from "./pages/PlayerInfo";
import { Redirect } from "./pages/Redirect";
import { GameStats } from "./pages/GameStats";
import { Voting } from "./pages/Voting";
import { TournamentGrid } from "./pages/TournamentGrid";

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
        path: "teams/:id",
        element: <TeamInfo />,
      },
      {
        path: "players/:id",
        element: <PlayerInfo />,
      },
      {
        path: "auth/:token",
        element: <Redirect />,
      },
      {
        path: "round/:id",
        element: <GameStats />,
      },
      {
        path: "votes",
        element: <Voting />,
      },
      {
        path: "grid",
        element: <TournamentGrid />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
