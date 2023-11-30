import { Box, Button, Container, TextField, Typography } from "@mui/material";
import "./css/Login.css";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { AuthContext } from "../context/AuthProvider";
import { GitHub, Google } from "@mui/icons-material";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const { googleLogin, githubLogin, loginUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleGoogle = () => {
    googleLogin()
      .then((data) => {
        Swal.fire("Google Login Success!", "", "success");
        setError("");
        // jwt token
        const email = data.user.email;
        const user = { email };
        axiosPublic.post("/jwt", user).then((res) => {
          console.log(res.data);
          if (res.data.success) {
            navigate(location?.state ? location.state : "/");
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGithub = () => {
    githubLogin()
      .then(() => {
        Swal.fire("Github Login Success!", "", "success");
        setError("");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleUserLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log In Success!",
          showConfirmButton: false,
          timer: 1200,
        });
        event.target.reset();
        setError("");
        // jwt token
        const user = { email };
        axiosPublic
          .post("/jwt", user, {
            // withCredentials: true,
          })
          .then((res) => {
            if (res.data) {
              navigate(location?.state ? location.state : "/");
            }
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Container>
      <Helmet>
        <title>Synergy Press | Login</title>
      </Helmet>
      <div className="login-box">
        <Typography textAlign="center" variant="h3" gutterBottom>
          Kindly Login to Your Account
        </Typography>
        <form onSubmit={handleUserLogin}>
          <TextField
            type="email"
            name="email"
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
          />
          <TextField
            type="password"
            name="password"
            id="password"
            label="Password"
            variant="outlined"
            fullWidth
          />
          <Typography my={5} textAlign="center">
            <Button type="submit" size="lg">
              Login
            </Button>
          </Typography>
        </form>
        {error && (
          <Typography className="text-red" textAlign="center">
            {error}
          </Typography>
        )}
        <Typography textAlign="center">
          Don't have an account? <Link to="/singup"> Register Here</Link>
        </Typography>

        <Box
          textAlign="center"
          mt={5}
          component="div"
          sx={{ display: "block" }}
        >
          <Button
            style={{ marginRight: "50px" }}
            onClick={handleGoogle}
            type="submit"
            size="lg"
          >
            <Google></Google>
          </Button>
          <Button onClick={handleGithub} type="submit" size="lg">
            <GitHub></GitHub>
          </Button>
        </Box>
      </div>
    </Container>
  );
};

export default Login;
