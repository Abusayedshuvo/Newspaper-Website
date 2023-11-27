import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const AllUsersTable = ({ users }) => {
  const { name, email, photo } = users;
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
            <Button> Make Admin</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

export default AllUsersTable;

AllUsersTable.propTypes = {
  users: PropTypes.object,
};
