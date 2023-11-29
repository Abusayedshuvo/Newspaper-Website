import { Helmet } from "react-helmet";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { Button, Container, TextField, Typography } from "@mui/material";
import useAxiosSecure from "../Hook/useAxiosSecure";
import useAuth from "../Hook/useAuth";
import Loading from "../components/Loading/Loading";
import Swal from "sweetalert2";
import { imageUpload } from "../Hook/imageUplode";

const MyProfile = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const handleRegistration = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.files[0];
    const imageData = await imageUpload(photo);
    const imageUrl = imageData.display_url;
    const userInfo = {
      name: name,
      email: email,
      photo: imageUrl,
    };

    axiosSecure.put(`/users/${user.email}`, userInfo).then((data) => {
      if (data.status) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Update Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      }
      console.log(data);
    });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Helmet>
        <title> Synergy Press || My Profile</title>
      </Helmet>
      <Breadcrumb title="My Profile"></Breadcrumb>

      <Container>
        <div className="login-box">
          <Typography textAlign="center" variant="h3" gutterBottom>
            Update Profile
          </Typography>
          <form onSubmit={handleRegistration}>
            <TextField
              type="text"
              name="name"
              id="name"
              defaultValue={user?.displayName}
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
              defaultValue={user?.email}
              variant="outlined"
              fullWidth
            />

            <Button type="submit" size="lg">
              Update
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default MyProfile;
