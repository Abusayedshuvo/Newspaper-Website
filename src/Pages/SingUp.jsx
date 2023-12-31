import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { GitHub, Google } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { imageUpload } from "../Hook/imageUplode";

const SingUp = () => {
  const axiosPublic = useAxiosPublic();
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegistration = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.files[0];
    const imageData = await imageUpload(photo);
    const imageUrl = imageData.display_url;
    if (password.length < 6) {
      setError("Password at least 6 charter");
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/.test(password)) {
      setError("Password need a capital letter and a special character");
      return;
    }
    setError("");
    createUser(email, password)
      .then((result) => {
        Swal.fire("Registration Success!", "", "success");
        event.target.reset();
        updateProfile(result.user, {
          displayName: name,
          photoURL: imageUrl,
        });
        const userInfo = {
          name: name,
          email: email,
          photo: imageUrl,
        };

        axiosPublic.post("/users", userInfo).then((data) => {
          if (data.status) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Added Successful",
              showConfirmButton: false,
              timer: 1500,
            });
            form.reset();
          }
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then((data) => {
        Swal.fire("Google Login Success!", "", "success");
        setError("");

        const userInfo = {
          name: data?.user?.displayName,
          email: data?.user?.email,
        };
        axiosPublic.post("/users", userInfo).then((data) => {
          console.log(data);
          if (data.status) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Added Successful",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
        // jwt token
        const email = data.user.email;
        const user = { email };
        useAxiosPublic.post("/jwt", user).then((res) => {
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
      .then((data) => {
        Swal.fire("Github Login Success!", "", "success");
        setError("");
        const userInfo = {
          name: data?.user?.displayName,
          email: data?.user?.email,
        };
        axiosPublic.post("/users", userInfo).then((data) => {
          console.log(data);
          if (data.status) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Added Successful",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <>
      <Container>
        <Helmet>
          <title>Synergy Press | Sing Up</title>
        </Helmet>
        <div className="login-box">
          <Typography textAlign="center" variant="h3" gutterBottom>
            Sing up a Account
          </Typography>
          <form onSubmit={handleRegistration}>
            <TextField
              type="text"
              name="name"
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              type="file"
              name="photo"
              accept="image/*"
              required
              id="photo"
              variant="outlined"
              fullWidth
            />
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
                Sing Up
              </Button>
            </Typography>
          </form>

          {error && (
            <Typography className="text-red" textAlign="center">
              {error}
            </Typography>
          )}
          <Typography textAlign="center">
            Already have an account? <Link to="/login"> Login Here</Link>
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
    </>
  );
};

export default SingUp;
