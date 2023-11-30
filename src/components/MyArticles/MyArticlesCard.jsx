import { Button } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";

const MyArticlesCard = ({ articles, index }) => {
  const { _id, title, status, premium } = articles;
  const handleDelete = () => {
    console.log("Delete");
  };
  return (
    <>
      <TableBody>
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell component="th" scope="row">
            {index + 1}
          </TableCell>
          <TableCell>{title}</TableCell>
          <TableCell>{status}</TableCell>
          <TableCell>{premium ? "True" : "False"}</TableCell>
          <TableCell>
            <Button> View Details</Button>
            <Button onClick={() => handleDelete(_id)}>Delete</Button>
            <Button onClick={() => handleDelete(_id)}>Update</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

MyArticlesCard.propTypes = {
  articles: PropTypes.object,
};

MyArticlesCard.propTypes = {
  index: PropTypes.number,
};

export default MyArticlesCard;
