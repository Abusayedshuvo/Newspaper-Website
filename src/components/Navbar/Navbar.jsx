import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import useAdmin from "../../Hook/useAdmin";
import useAuth from "../../Hook/useAuth";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

const linkStyle = {
  color: "#fff",
  padding: "0 20px",
  fontFamily: "Helvetica Neue",
  textDecoration: "none",
  fontWeight: "400",
};

function Navbar() {
  const [isAdmin] = useAdmin();
  const { user, logOut } = useAuth();
  const navLinks = (
    <div>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      <Link style={linkStyle} to="/add-articles">
        Add Articles
      </Link>
      <Link style={linkStyle} to="/all-articles">
        All Articles
      </Link>
      <Link style={linkStyle} to="/subscription">
        Subscription
      </Link>
      <Link style={linkStyle} to="/premium-articles">
        Premium Articles
      </Link>
      {user && isAdmin && (
        <Link style={linkStyle} to="/dashboard">
          Dashboard
        </Link>
      )}
    </div>
  );

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogOut = () => {
    logOut()
      .then(() =>
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log out success",
          showConfirmButton: false,
          timer: 1200,
        })
      )
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <AppBar sx={{ backgroundColor: "#d60000" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img width="200px" src={logo} alt="" />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navLinks}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img width="250" src={logo} alt="" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            {navLinks}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <>
                <div style={{ display: "flex" }}>
                  <Link to="/profile">
                    <Avatar alt={user?.displayName} src={user?.photoURL} />
                  </Link>
                  <Button onClick={handleLogOut} style={linkStyle}>
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <Link style={linkStyle} to="/login">
                Login
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
