import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsersTable = ({ users, refetch }) => {
  const { _id, name, email, photo } = users;
  const axiosSecure = useAxiosSecure();
  const handleMakeAdmin = (_id) => {
    axiosSecure.patch(`/users/admin/${_id}`).then((res) => {
      if (res?.data?.user?.role === "admin") {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${res?.data?.user?.name} is admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <>
      <TableBody>
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell component="th" scope="row">
            {name}
          </TableCell>
          <TableCell align="right">{email}</TableCell>
          <TableCell align="right">
            <img src={photo} alt="" />
          </TableCell>
          <TableCell align="right">
            {users?.role === "admin" ? (
              "Admin"
            ) : (
              <Button onClick={() => handleMakeAdmin(_id)}>Make Admin</Button>
            )}
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

export default AllUsersTable;

AllUsersTable.propTypes = {
  users: PropTypes.object,
  refetch: PropTypes.func,
};
