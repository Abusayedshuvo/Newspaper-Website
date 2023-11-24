import { Helmet } from "react-helmet";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const AddArticle = () => {
  return (
    <>
      <Helmet>
        <title> Synergy Press || Add Article</title>
      </Helmet>
      <Breadcrumb title="Add Article"></Breadcrumb>
    </>
  );
};

export default AddArticle;
