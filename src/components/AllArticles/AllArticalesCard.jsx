import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const AllArticalesCard = ({ article }) => {
  const { _id, title, publishe, tag, description, image } = article;
  return (
    <>
      <Grid xs={6} item={true}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <CardMedia
              component="img"
              height="194"
              image={image}
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
              <Button size="small">Learn More</Button>
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
