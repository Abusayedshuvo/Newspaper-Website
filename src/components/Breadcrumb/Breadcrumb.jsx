import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Breadcrumb = ({ title }) => {
  return (
    <>
      <div className="bg-primary/10 py-16">
        <div className="m-container">
          <p className="text-6xl font-bold text-primary mb-3"> {title} </p>
          <Link className="text-primary font-bold" to="/">
            Home
          </Link>
          <span>
            / <Typewriter words={[`${title}`]} loop={5} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;

Breadcrumb.propTypes = {
  title: PropTypes.node,
};
