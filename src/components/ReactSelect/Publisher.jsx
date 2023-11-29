import Select from "react-select";
import PropTypes from "prop-types";
import { FormHelperText } from "@mui/material";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";

export default function Publisher({ publisher, setPublisher }) {
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

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="App">
      <FormHelperText> Select Publisher </FormHelperText>
      <Select
        defaultValue={publisher}
        onChange={setPublisher}
        options={options}
      />
    </div>
  );
}

Publisher.propTypes = {
  publisher: PropTypes.object,
};

Publisher.propTypes = {
  setPublisher: PropTypes.func,
};
