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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function navbar() {
  return (
    <>
    <Box pt={3} pl={3} pb={3} >
      <Typography variant="h5" align="left" color="textSecondary" paragraph>
        INSPIRER: An Art & Design Generator
      </Typography>
    </Box>
      <CssBaseline />
      <AppBar position="relative">
        <tabs align="center">
          <Tab label="Generate" />
          <Tab label="Profile" />
          <Tab label="Explore Pinterest" />
          <Tab label="Shop" />
          <Tab label="Install" />
        </tabs>
        <Toolbar>
          <Typography variant="h6"> </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
