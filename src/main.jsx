import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./Pages/AddCoffee.jsx";
import UpdateCoffee from "./Pages/UpdateCoffee.jsx";
import AuthProvider from "./AuthProvider.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Users from "./Pages/Users.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () =>
      fetch("https://coffee-store-server-henna-chi.vercel.app/coffee"),
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-server-henna-chi.vercel.app/coffee/${params.id}`
      ),
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () =>
      fetch("https://coffee-store-server-henna-chi.vercel.app/user"),
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
