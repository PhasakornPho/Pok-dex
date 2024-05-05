// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import DetailPage from "@/pages/detail";
import NotFound from "./components/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
    {
      path: "/detail/:name",
      element: <DetailPage />,
    },
  ]);

  return (
    <div className="bg-[url('/images/list_bg.jpg')] min-h-[100vh] bg-cover">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
