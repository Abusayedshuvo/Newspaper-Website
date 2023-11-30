import App from "../App.jsx";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage.jsx";
import Home from "../Pages/Home.jsx";
import AddArticle from "../Pages/AddArticle.jsx";
import AllArticles from "../Pages/AllArticles.jsx";
import ArticleDetails from "../Pages/ArticleDetails.jsx";
import Login from "../Pages/Login.jsx";
import SingUp from "../Pages/SingUp.jsx";
import AllUsers from "../Pages/Dashboard/AllUsers.jsx";
import Articles from "../Pages/Dashboard/Articles.jsx";
import AddPublisher from "../Pages/Dashboard/AddPublisher.jsx";
import PrivateRoutes from "../Routes/PrivateRoutes.jsx";
import AdminRoutes from "./AdminRoutes.jsx";
import Subscription from "../Pages/Subscription.jsx";
import PremiumArticle from "../Pages/PremiumArticle.jsx";
import MyProfile from "../Pages/MyProfile.jsx";
import MyArticles from "../Pages/MyArticles.jsx";
import Dashboard from "../Pages/Dashboard/Dashboard.jsx";
import DashboardHome from "../Pages/Dashboard/DashboardHome.jsx";

export const router = createBrowserRouter([
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
        element: (
          <PrivateRoutes>
            <AddArticle></AddArticle>
          </PrivateRoutes>
        ),
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
        path: "/subscription",
        element: <Subscription></Subscription>,
      },
      {
        path: "/premium-articles",
        element: <PremiumArticle></PremiumArticle>,
      },
      {
        path: "/my-articles",
        element: (
          <PrivateRoutes>
            <MyArticles></MyArticles>
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
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
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "home",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "users",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "articles",
        element: (
          <AdminRoutes>
            <Articles></Articles>
          </AdminRoutes>
        ),
      },
      {
        path: "publisher",
        element: (
          <AdminRoutes>
            <AddPublisher></AddPublisher>
          </AdminRoutes>
        ),
      },
    ],
  },
]);
