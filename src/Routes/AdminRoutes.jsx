import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { PropTypes } from "prop-types";
import useAuth from "../Hook/useAuth";
import useAdmin from "../Hook/useAdmin";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin();
  if (loading || isAdminLoading) {
    return <Loading></Loading>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default AdminRoutes;

AdminRoutes.propTypes = {
  children: PropTypes.node,
};
