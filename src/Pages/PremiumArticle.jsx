import { Helmet } from "react-helmet";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Container, Grid } from "@mui/material";
import AllArticalesCard from "../components/AllArticles/AllArticalesCard";
import Loading from "../components/Loading/Loading";

const PremiumArticle = () => {
  const axiosPublic = useAxiosPublic();

  const getArticles = async () => {
    const res = await axiosPublic.get(`/premium-articles`);
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["premium-articles"],
    queryFn: getArticles,
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <Helmet>
        <title> Synergy Press || Premium Article</title>
      </Helmet>
      <Breadcrumb title="Premium Article"></Breadcrumb>

      <Container>
        {data?.data?.length > 0 ? (
          <>
            <Grid my={10} container spacing={2}>
              {data?.data?.map((article) => (
                <AllArticalesCard
                  key={article._id}
                  article={article}
                ></AllArticalesCard>
              ))}
            </Grid>
          </>
        ) : (
          <>
            <p className=" text-center">No Service Available on this name</p>
          </>
        )}
      </Container>
    </>
  );
};

export default PremiumArticle;
