import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Loading from "../../components/Loading/Loading";
import { Helmet } from "react-helmet";
import { Container, Grid } from "@mui/material";
import ArticlesTable from "../../components/Dashboard/ArticlesTable";

const Articles = () => {
  const axiosSecure = useAxiosSecure();
  const getArticles = async () => {
    const res = await axiosSecure.get(`/articles`);
    return res;
  };
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Helmet>
        <title> Synergy Press || Dashboard || All Articles</title>
      </Helmet>
      <Container>
        {data?.data?.length > 0 ? (
          <>
            <Grid my={10} container spacing={2}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Article Title</TableCell>
                      <TableCell> Author Name </TableCell>
                      <TableCell>Author Email</TableCell>
                      <TableCell>Author Photo</TableCell>
                      <TableCell>Posted Date</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Publisher</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  {data?.data?.map((articles) => (
                    <ArticlesTable
                      key={articles._id}
                      articles={articles}
                      refetch={refetch}
                    ></ArticlesTable>
                  ))}
                </Table>
              </TableContainer>
            </Grid>
          </>
        ) : (
          <>
            <p className=" text-center">Articles Not Available</p>
          </>
        )}
      </Container>
    </>
  );
};

export default Articles;
