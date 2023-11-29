import { Helmet } from "react-helmet";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading/Loading";
import AllArticalesCard from "../components/AllArticles/AllArticalesCard";
import { Button, Container, Grid, TextField } from "@mui/material";
import Filter from "../components/Filter/Filter";

const AllArticles = () => {
  const axiosPublic = useAxiosPublic();
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [filterPublisher, setFilterPublisher] = useState([]);
  const [filterTag, setFilterTag] = useState([]);
  const getArticles = async () => {
    const res = await axiosPublic.get(`/articles`);
    return res;
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  useEffect(() => {
    if (search) {
      data.data = data.data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    setArticles(data);
    refetch();
  }, [data, search, refetch]);

  // filter by publisher name
  useEffect(() => {
    if (filterPublisher.value) {
      data.data = data.data.filter((item) =>
        item.publishe
          .toLowerCase()
          .includes(filterPublisher.value.toLowerCase())
      );
    }
    setArticles(data);
    refetch();
  }, [data, filterPublisher, search, refetch]);

  // Filter by tag
  useEffect(() => {
    if (filterTag.value) {
      data.data = data.data.filter((item) =>
        item.publishe.toLowerCase().includes(filterTag.value.toLowerCase())
      );
    }
    setArticles(data);
    refetch();
  }, [data, filterPublisher, filterTag, search, refetch]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const searchInput = document.getElementById("search-field");
    setSearch(searchInput.value);
  };

  return (
    <>
      <Helmet>
        <title> Synergy Press || All Article</title>
      </Helmet>
      <Breadcrumb title="All Article"></Breadcrumb>
      <Container my={10}>
        <Grid container spacing={2}>
          <Grid item={true} xs={6}>
            <form
              style={{ display: "flex", marginTop: "100px" }}
              onSubmit={handleSearch}
            >
              <TextField
                type="text"
                name="email"
                id="search-field"
                label="Search By Article Title"
                variant="outlined"
                fullWidth
                style={{ margin: "20px," }}
              />
              <Button
                style={{ padding: "10px 50px" }}
                variant="outlined"
                type="submit"
                size="lg"
              >
                Search
              </Button>
            </form>
          </Grid>
          <Grid item={true} xs={6}>
            <Filter
              filterPublisher={filterPublisher}
              setFilterPublisher={setFilterPublisher}
              filterTag={filterTag}
              setFilterTag={setFilterTag}
            ></Filter>
          </Grid>
        </Grid>
      </Container>
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
