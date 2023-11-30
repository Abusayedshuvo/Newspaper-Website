import { Helmet } from "react-helmet";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { Container, Grid } from "@mui/material";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading/Loading";
import useAuth from "../Hook/useAuth";
import MyArticlesCard from "../components/MyArticles/MyArticlesCard";
import Swal from "sweetalert2";

const MyArticles = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const getArticles = async () => {
    const res = await axiosSecure.get(`/articles/user/${user.email}`);
    return res;
  };
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  const handleDelete = async (_id) => {
    const response = await axiosSecure.delete(`/articles/${_id}`);
    console.log(response);
    refetch();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Article is Deleted",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Helmet>
        <title> Synergy Press || My Article</title>
      </Helmet>
      <Breadcrumb title="My Article"></Breadcrumb>

      <Container>
        {data?.data?.length > 0 ? (
          <>
            <Grid my={10} container spacing={2}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>No</TableCell>
                      <TableCell>Article Title</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell> Is Premium </TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  {data?.data?.map((articles, index) => (
                    <MyArticlesCard
                      key={articles._id}
                      articles={articles}
                      refetch={refetch}
                      index={index}
                      handleDelete={handleDelete}
                    ></MyArticlesCard>
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

export default MyArticles;
