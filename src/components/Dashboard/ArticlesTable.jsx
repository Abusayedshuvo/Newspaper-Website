import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";
import { Box, Button } from "@mui/material";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const ArticlesTable = ({ articles, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const {
    _id,
    title,
    publishe,
    status,
    postedDate,
    authorName,
    authorEmail,
    authorPhoto,
  } = articles;
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

  const handleApprove = async (_id) => {
    const response = await axiosSecure.patch(`/articles/approve/${_id}`);
    console.log(response);
    refetch();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Article is Approve Now",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handlePremium = async (_id) => {
    const response = await axiosSecure.patch(`/articles/premium/${_id}`);
    console.log(response);
    refetch();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "This Article is Premium Now",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <TableBody>
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell component="th" scope="row">
            {title}
          </TableCell>
          <TableCell>{authorName}</TableCell>
          <TableCell>{authorEmail}</TableCell>
          <TableCell>
            <img width="80px" src={authorPhoto} alt={authorName} />
          </TableCell>
          <TableCell>{postedDate}</TableCell>
          <TableCell>{status}</TableCell>
          <TableCell>{publishe}</TableCell>
          <TableCell>
            <Box sx={{ "& button": { m: "3px" } }}>
              <Button
                variant="outlined"
                size="small"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => handleApprove(_id)}
              >
                Approve
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => handleDelete(_id)}
              >
                Decline
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => handlePremium(_id)}
              >
                Make Premium
              </Button>
            </Box>
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

ArticlesTable.propTypes = {
  articles: PropTypes.object,
  refetch: PropTypes.func,
};

export default ArticlesTable;
