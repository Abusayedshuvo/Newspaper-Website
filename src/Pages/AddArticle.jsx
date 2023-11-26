import { Helmet } from "react-helmet";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { Button, Container, Grid, TextField } from "@mui/material";
import "./css/AddArticle.css";
import ReactSelect from "../components/ReactSelect/ReactSelect";
import Publisher from "../components/ReactSelect/Publisher";
import { useState } from "react";
import useAxiosPublic from "../Hook/useAxiosPublic";
import Swal from "sweetalert2";

const AddArticle = () => {
  const axiosPublic = useAxiosPublic();
  const [publisher, setPublisher] = useState(null);
  const [tags, setTags] = useState(null);

  const handleAddArticle = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const image = form.image.value;
    const publishe = publisher.value;
    const tag = tags;
    const description = form.description.value;

    const addArticles = { title, publishe, tag, description, image };

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
              <TextField
                fullWidth
                id="outlined-basic"
                label="Title"
                name="title"
                variant="outlined"
              />
            </Grid>
            <Grid xs={6} item={true}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Image Url"
                variant="outlined"
                name="image"
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
