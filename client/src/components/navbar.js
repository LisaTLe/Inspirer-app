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


export default function Navbar() {
  // const [problemFix, setProblemFix] = useState(0);
  return (
    <>
    <Box pt={3} pl={3} pb={3} >
      <Typography variant="h5" align="left" color="textSecondary" paragraph>
        INSPIRER: An Art & Design Generator
      </Typography>
    </Box>
      <CssBaseline />
      <AppBar position="relative">
        <Tabs value={0} align="center">
          <Tab label="Home" to="/" />
          <Tab label="Sign Up" to="/signup" />
          <Tab label="Profile" to="/me" />
          <Tab label="Explore Pinterest" />
          <Tab label="Shop" />
          <Tab label="Install Now" />
        </Tabs>
        <Toolbar>
          <Typography variant="h6"> </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
