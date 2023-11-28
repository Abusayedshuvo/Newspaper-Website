import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const ArticlesTable = ({ articles }) => {
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
  const handleDelete = () => {
    console.log("Delete");
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
            <img src={authorPhoto} alt={authorName} />
          </TableCell>
          <TableCell>{postedDate}</TableCell>
          <TableCell>{status}</TableCell>
          <TableCell>{publishe}</TableCell>
          <TableCell>
            <Button onClick={() => handleDelete(_id)}>Delete</Button>
            <Button onClick={() => handleDelete(_id)}>Approve</Button>
            <Button onClick={() => handleDelete(_id)}>Decline</Button>
            <Button onClick={() => handleDelete(_id)}>Make Premium</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

ArticlesTable.propTypes = {
  articles: PropTypes.object,
};

export default ArticlesTable;
