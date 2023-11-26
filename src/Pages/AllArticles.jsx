import { Helmet } from "react-helmet";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading/Loading";
import AllArticalesCard from "../components/AllArticles/AllArticalesCard";
import { Container, Grid } from "@mui/material";

const AllArticles = () => {
  const axiosPublic = useAxiosPublic();
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");

  const getArticles = async () => {
    const res = await axiosPublic.get(`/articles`);
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  useEffect(() => {
    if (search) {
      data.data = data.data.filter((item) =>
        item.serviceName.toLowerCase().includes(search.toLowerCase())
      );
    }
    setArticles(data);
  }, [data, search]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     const searchInput = document.getElementById("search-field");
  //     setSearch(searchInput.value);
  //   };

  return (
    <>
      <Helmet>
        <title> Synergy Press || All Article</title>
      </Helmet>
      <Breadcrumb title="All Article"></Breadcrumb>

      <Container>
        {articles?.data?.length > 0 ? (
          <>
            <Grid my={10} container spacing={2}>
              {articles?.data?.map((article) => (
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

export default AllArticles;
