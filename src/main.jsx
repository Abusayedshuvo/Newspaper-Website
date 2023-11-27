import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Theme from "./components/Theme/Theme.jsx";
import Home from "./Pages/Home.jsx";
import AddArticle from "./Pages/AddArticle.jsx";
import AllArticles from "./Pages/AllArticles.jsx";

// tanstack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ArticleDetails from "./Pages/ArticleDetails.jsx";
import Login from "./Pages/Login.jsx";
import SingUp from "./Pages/SingUp.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Dashboard from "./Pages/Dashboard/dashboard.jsx";
import AllUsers from "./Pages/Dashboard/AllUsers.jsx";
import Articles from "./Pages/Dashboard/Articles.jsx";
import AddPublisher from "./Pages/Dashboard/AddPublisher.jsx";
// Create a client
const queryClient = new QueryClient();

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
      {
        path: "/all-articles",
        element: <AllArticles></AllArticles>,
      },
      {
        path: "/articles/:id",
        element: <ArticleDetails></ArticleDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "articles",
        element: <Articles></Articles>,
      },
      {
        path: "publisher",
        element: <AddPublisher></AddPublisher>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Theme>
          <RouterProvider router={router} />
        </Theme>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
