import Select from "react-select";
import PropTypes from "prop-types";
import { FormHelperText } from "@mui/material";

const options = [
  { value: "world", label: "world" },
  { value: "business", label: "business" },
  { value: "politics", label: "politics" },
  { value: "travel", label: "travel" },
  { value: "life-style", label: "life-style" },
  { value: "sports", label: "sports" },
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
