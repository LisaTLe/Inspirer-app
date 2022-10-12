import React from "react";
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
} from "@material-ui/core";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import "./main.css";

export default function Navbar() {
  return (
    <>
      <Box className="title" pt={4} pl={3} pb={3} style={{backgroundColor: "#9BC2A2"}}>
        <Typography variant="h5" align="left" >
          INSPIRER: An Art & Design Generator
        </Typography>
      </Box>
      <CssBaseline />
      <AppBar className="navBar" position="relative" style={{backgroundColor: "#9BC2A2"}}>
        <Box alignItems="right" sx={{ flexGrow: 1, textAlign: "right" }} >
          <Link to="/login" className="link2">
            Login
          </Link>
          <Link to="/register" className="link2">
            Register
          </Link>
        </Box>

        <Tabs className="navTabs" value={0} align="center"  >
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/profile" className="link" >
             Profile
          </Link>
          <Link to="/shop" className="link">
             Shop 
          </Link>
          <Link to="/install" className="link">
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
