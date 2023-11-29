import Select from "react-select";
import PropTypes from "prop-types";
import { FormHelperText } from "@mui/material";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";

const Filter = ({
  filterPublisher,
  setFilterPublisher,
  filterTag,
  setFilterTag,
}) => {
  const axiosPublic = useAxiosPublic();
  const getPublishers = async () => {
    const res = await axiosPublic.get(`/publishers/publisherName`);
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["publishers"],
    queryFn: getPublishers,
  });

  const options = data?.data?.publishers?.map((publisher) => ({
    value: publisher.publisherName,
    label: publisher.publisherName,
  }));

  const tags = [
    { value: "world", label: "world" },
    { value: "business", label: "business" },
    { value: "politics", label: "politics" },
    { value: "travel", label: "travel" },
    { value: "life-style", label: "life-style" },
    { value: "sports", label: "sports" },
  ];
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <div style={{ width: "100%", marginTop: "80px" }} className="App">
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "49%", marginRight: "20px" }}>
            <FormHelperText> Filter by Publisher </FormHelperText>
            <Select
              defaultValue={filterPublisher}
              onChange={setFilterPublisher}
              options={options}
            />
          </div>
          <div style={{ width: "49%" }}>
            <FormHelperText> Filter by Tag </FormHelperText>
            <Select
              defaultValue={filterTag}
              onChange={setFilterTag}
              options={tags}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filterPublisher: PropTypes.array,
};

Filter.propTypes = {
  setFilterPublisher: PropTypes.func,
};

Filter.propTypes = {
  filterTag: PropTypes.array,
};

Filter.propTypes = {
  setFilterTag: PropTypes.func,
};
