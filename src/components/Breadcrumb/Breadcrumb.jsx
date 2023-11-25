import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "./breadcrumb.css";
import { Typography } from "@mui/material";

const Breadcrumb = ({ title }) => {
  return (
    <>
      <div className="bg">
        <Typography variant="h3" component="h2">
          {title}
        </Typography>
        <Link to="/">Home </Link>
        <span>
          / <Typewriter words={[`${title}`]} loop={5} />
        </span>
      </div>
    </>
  );
};

export default Breadcrumb;

Breadcrumb.propTypes = {
  title: PropTypes.node,
};
