import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Theme from "./components/Theme/Theme.jsx";
import Home from "./Pages/Home.jsx";
import AddArticle from "./Pages/AddArticle.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-articles",
        element: <AddArticle></AddArticle>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>
);
