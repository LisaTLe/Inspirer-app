import React, { useContext } from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, Navigate } from "react-router-dom";
import "./main.css";
import { fontFamily } from "@mui/system";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    navigate("/");
  };
  console.log(user);

  return (
    <>
      <Box
        className="title"
        pt={4}
        pl={3}
        pb={3}
        style={{ backgroundColor: "#9BC2A2" }}
      >
        <Typography
          variant="h5"
          align="left"
          style={{ fontWeight: "bold", fontSize: 30 }}
        >
          INSPIRER: An Art & Design Generator
        </Typography>
      </Box>
      <CssBaseline />
      <AppBar
        className="navBar"
        position="relative"
        style={{ backgroundColor: "#9BC2A2" }}
      >
        <Box
          alignItems="right"
          sx={{ flexGrow: 1, textAlign: "right", fontWeight: "bold" }}
          pl={4}
        >
          {user ? (
            <>
              <Button className="link2" onClick={onLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" className="link2" style={{ fontSize: 20 }}>
                Login
              </Link>
              <Link to="/register" className="link2" style={{ fontSize: 20 }}>
                Register
              </Link>
            </>
          )}
        </Box>

        <Tabs
          className="navTabs"
          value={0}
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          <Link to="/" className="link" style={{ fontSize: 24 }}>
            Home
          </Link>
          <Link to="/profile" className="link" style={{ fontSize: 24 }}>
            Profile
          </Link>
          <Link
            to={{ pathname: "https://shop.artic.edu/collections/prints" }}
            target="_blank"
            className="link"
            style={{ fontSize: 24 }}
          >
            Shop
          </Link>
          <Link to="/install" className="link" style={{ fontSize: 24 }}>
            Install
          </Link>
        </Tabs>

        <Toolbar>
          <Typography variant="h6"> </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
