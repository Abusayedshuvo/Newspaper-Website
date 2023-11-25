import Select from "react-select";
import PropTypes from "prop-types";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function Publisher({ publisher, setPublisher }) {
  return (
    <div className="App">
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