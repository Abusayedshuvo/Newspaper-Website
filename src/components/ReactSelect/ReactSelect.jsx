import Select from "react-select";
import PropTypes from "prop-types";
import { FormHelperText } from "@mui/material";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function ReactSelect({ setTags, tags }) {
  return (
    <div className="App">
      <FormHelperText> Select Tags </FormHelperText>
      <Select
        isMulti
        defaultValue={tags}
        onChange={setTags}
        options={options}
      />
    </div>
  );
}

ReactSelect.propTypes = {
  setTags: PropTypes.func,
};

ReactSelect.propTypes = {
  tags: PropTypes.array,
};
