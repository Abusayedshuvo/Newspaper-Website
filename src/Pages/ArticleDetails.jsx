import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";
import Loading from "../components/Loading/Loading";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

const ArticleDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const getArticles = async () => {
    const res = await axiosPublic.get(`/articles/${id}`);
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["articlesDetails"],
    queryFn: getArticles,
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  const { title, publishe, tag, description, imageUrl } = data.data;
  return (
    <>
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
      </Card>
    </>
  );
};

export default ArticleDetails;
