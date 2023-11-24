import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const Title = ({ children }) => {
  return (
    <>
      <Typography my={10} textAlign={"center"} variant="h3" component="h2">
        {children}
      </Typography>
    </>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};
export default Title;
