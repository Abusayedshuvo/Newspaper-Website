import { ThemeProvider, createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d60000",
    },
  },
  typography: {
    fontFamily: "Helvetica Neue",
  },
});

const SiteTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

SiteTheme.propTypes = {
  children: PropTypes.node,
};

export default SiteTheme;
