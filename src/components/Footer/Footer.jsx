import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import logo from "../../assets/logo.png";
import "./footer.css";
import { Typography } from "@mui/material";
import moment from "moment/moment";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="" />
      <div className="social">
        <Facebook></Facebook>
        <Instagram></Instagram>
        <LinkedIn></LinkedIn>
        <YouTube></YouTube>
      </div>
      <Typography level="h1" fontWeight={300}>
        @ {moment().format("YYYY")} Synergy Press
      </Typography>
    </div>
  );
};

export default Footer;
