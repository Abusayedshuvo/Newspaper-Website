import { Button, FormHelperText, TextField, Typography } from "@mui/material";
import "../css/Login.css";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";
import { imageUpload } from "../../Hook/imageUplode";

const AddPublisher = () => {
  const axiosPublic = useAxiosPublic();

  const handlePublisher = async (event) => {
    event.preventDefault();
    const form = event.target;
    const publisherName = form.publisherName.value;
    const image = form.publisherLogo.files[0];
    const imageData = await imageUpload(image);
    const publisherLogo = imageData.display_url;

    const publisher = { publisherName, publisherLogo };
    axiosPublic
      .post("/publishers", publisher)
      .then((data) => {
        console.log(data);
        if (data.status) {
          Swal.fire("Publisher Info Added Successful", "success");
          form.reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="login-box">
      <Typography textAlign="center" variant="h3" gutterBottom>
        Kindly Add Publisher
      </Typography>
      <form onSubmit={handlePublisher}>
        <TextField
          type="text"
          name="publisherName"
          id="publisherName"
          label="Publisher Name"
          variant="outlined"
          fullWidth
        />
        <FormHelperText> Publisher Logo </FormHelperText>
        <TextField
          type="file"
          accept="image/*"
          required
          name="publisherLogo"
          id="publisherLogo"
          variant="outlined"
          fullWidth
        />

        <Button type="submit" size="lg">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddPublisher;
