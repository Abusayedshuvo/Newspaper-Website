import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { GitHub, Google } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hook/useAxiosPublic";

const SingUp = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

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
          photoURL: photo,
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
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              type="text"
              name="photo"
              id="outlined-basic"
              label="Photo URL"
              variant="outlined"
              fullWidth
            />
            <TextField
              type="email"
              name="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
            <TextField
              type="password"
              name="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
            />

            <Button type="submit" size="lg">
              Login
            </Button>
          </form>
          {error && (
            <Typography className="text-red" textAlign="center">
              {error}
            </Typography>
          )}

          <Box mt={5} component="div" sx={{ display: "block" }}>
            <Button onClick={handleGoogle} type="submit" size="lg">
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
