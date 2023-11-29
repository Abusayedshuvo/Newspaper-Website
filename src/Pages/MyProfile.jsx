import { Helmet } from "react-helmet";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const MyProfile = () => {
  return (
    <>
      <Helmet>
        <title> Synergy Press || My Profile</title>
      </Helmet>
      <Breadcrumb title="My Profile"></Breadcrumb>
    </>
  );
};

export default MyProfile;
