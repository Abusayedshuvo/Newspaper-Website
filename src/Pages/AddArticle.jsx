import { Helmet } from "react-helmet";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import {
  Button,
  Container,
  FormHelperText,
  Grid,
  TextField,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./css/AddArticle.css";
import ReactSelect from "../components/ReactSelect/ReactSelect";
import Publisher from "../components/ReactSelect/Publisher";
import { useState } from "react";
import useAxiosPublic from "../Hook/useAxiosPublic";
import Swal from "sweetalert2";
import { imageUpload } from "../Hook/imageUplode";
import useAuth from "../Hook/useAuth";

const AddArticle = () => {
  const axiosPublic = useAxiosPublic();
  const [publisher, setPublisher] = useState(null);
  const [tags, setTags] = useState(null);
  const [isPremium, setIsPremium] = useState(false);

  const { user } = useAuth();

  const status = "pending";
  const postedDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const authorName = user?.displayName;
  const authorEmail = user?.email;
  const authorPhoto = user?.photoURL;

  const handleAddArticle = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const publishe = publisher.value;
    const tag = tags;
    const description = form.description.value;
    const premium = isPremium;
    const image = form.image.files[0];
    const imageData = await imageUpload(image);
    const imageUrl = imageData.display_url;
    const addArticles = {
      title,
      publishe,
      tag,
      description,
      imageUrl,
      status,
      postedDate,
      authorName,
      authorEmail,
      authorPhoto,
      premium,
    };

    axiosPublic
      .post("/articles", addArticles)
      .then((data) => {
        console.log(data);
        if (data.status) {
          Swal.fire("Article Added Successful", "success");
          form.reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title> Synergy Press || Add Article</title>
      </Helmet>
      <Breadcrumb title="Add Article"></Breadcrumb>

      <Container className="from-box">
        <form onSubmit={handleAddArticle}>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={6} item={true}>
              <FormHelperText> </FormHelperText>

              <TextField
                fullWidth
                name="title"
                required
                id="outlined-basic"
                label="Title"
                variant="outlined"
              />
            </Grid>
            <Grid xs={6} item={true}>
              <FormHelperText> Add Image </FormHelperText>
              <TextField
                fullWidth
                type="file"
                name="image"
                accept="image/*"
                required
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
            <Grid xs={6} item={true}>
              <Publisher publisher={publisher} setPublisher={setPublisher} />
            </Grid>
            <Grid xs={6} item={true}>
              <ReactSelect
                fullWidth
                tags={tags}
                setTags={setTags}
              ></ReactSelect>
            </Grid>
            <Grid xs={6} item={true}>
              <TextField
                multiline
                fullWidth
                rows={4}
                name="description"
                variant="outlined"
                label="Your Text Here"
              />
            </Grid>
            <Grid xs={6} item={true}>
              <FormGroup
                style={{
                  border: "solid 1px #ddd",
                  padding: "8px",
                  borderRadius: "4px",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      name="isPremium"
                      checked={isPremium}
                      onChange={(e) => setIsPremium(e.target.checked)}
                    />
                  }
                  label="Premium Article"
                />
              </FormGroup>
            </Grid>

            <Grid xs={12} item={true}>
              <Button type="submit" size="lg">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default AddArticle;
