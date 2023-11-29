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
  const customStyles = {
    option: (provided) => ({
      ...provided,
      backgroundColor: "#000",
      color: "white",
      padding: 10,
      zIndex: 10,
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "#fff",
      color: "white",
      zIndex: 10,
    }),
  };

  return (
    <div style={{ width: "100%", zIndex: 10 }} className="App">
      <FormHelperText> Select Publisher </FormHelperText>
      <Select
        styles={customStyles}
        defaultValue={publisher}
        onChange={setPublisher}
        options={options}
        style={{
          zIndex: 99,
        }}
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
