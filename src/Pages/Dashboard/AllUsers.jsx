import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading/Loading";
import { Helmet } from "react-helmet";
import { Container, Grid } from "@mui/material";
import AllUsersTable from "../../components/AllUsers/AllUsersTable";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const AllUsers = () => {
  const axiosPublic = useAxiosPublic();

  const getUsers = async () => {
    const res = await axiosPublic.get(`/users`);
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Helmet>
        <title> Synergy Press || Dashboard || All Users</title>
      </Helmet>
      <p>All users</p>

      <Container>
        {data?.data?.length > 0 ? (
          <>
            <Grid my={10} container spacing={2}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell> Name</TableCell>
                      <TableCell align="right">Email</TableCell>
                      <TableCell align="right"> Profile </TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  {data?.data?.map((users) => (
                    <AllUsersTable
                      key={users._id}
                      users={users}
                    ></AllUsersTable>
                  ))}
                </Table>
              </TableContainer>
            </Grid>
          </>
        ) : (
          <>
            <p className=" text-center">No Users Available</p>
          </>
        )}
      </Container>
    </>
  );
};

export default AllUsers;
