import React from "react";
import Header from "./components/header";
import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import Write from "./components/Write";
import Read from "./components/Read";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/home";

function App() {
  const routesArray = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/write",
      element: <Write />,
    },
    {
      path: "/read",
      element: <Read />,
    }
  ];

  let routesElement = useRoutes(routesArray);

  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;