import React from "react";
import logo from "./logo.svg";
import "./App.css";

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
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Paper from "@mui/material/Paper";
import FormLabel from "@mui/material/FormLabel";

function App() {
  return (
    <>
      <div color="accent">
        <Typography variant="h5" align="left" color="textSecondary" paragraph>
          THIS IS APPLICATION TITLE
        </Typography>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCameraIcon />
            <Typography variant="h6">NAV BAR</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div>
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                ART
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                TEST TEST TEST TEST
              </Typography>
            </Container>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
