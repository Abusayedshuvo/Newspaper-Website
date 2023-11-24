import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Img404 from "../assets/404.json";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar/Navbar";
import { Container } from "@mui/material";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Guide Nook | 404 </title>
      </Helmet>
      <Navbar></Navbar>
      <Container>
        <Lottie
          className="w-2/5 mx-auto mb-0"
          animationData={Img404}
          loop={true}
        />
        ;<p className="text-4xl font-bold mb-5">Oops!</p>
        <p> We're sorry,</p>
        <p> The page you were looking for doesn't exist anymore.</p>
        <Link
          t="/"
          className="inline-block p-4 w-1/2 bg-primary text-white rounded-lg font-semibold mt-10"
        >
          Back to Home
        </Link>
      </Container>
    </>
  );
};

export default ErrorPage;
