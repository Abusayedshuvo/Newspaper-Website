import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const AllArticalesCard = ({ article }) => {
  const { _id, title, publishe, tag, description, imageUrl } = article;
  const axiosPublic = useAxiosPublic();
  const handleLearnMore = async () => {
    try {
      await axiosPublic.patch(`/articles/${_id}/update-views`);
    } catch (error) {
      console.error("Error updating view count:", error);
    }
  };
  return (
    <>
      <Grid xs={6} item={true}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <CardMedia
              component="img"
              height="194"
              image={imageUrl}
              alt="Paella dish"
            />
            <CardActions>
              {tag.map((tags, index) => (
                <Button key={index} size="small">
                  {tags.value}
                </Button>
              ))}
            </CardActions>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {publishe}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
          <CardActions>
            <Link to={`/articles/${_id}`}>
              <Button onClick={handleLearnMore} size="small">
                Learn More
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default AllArticalesCard;

AllArticalesCard.propTypes = {
  article: PropTypes.object,
};
