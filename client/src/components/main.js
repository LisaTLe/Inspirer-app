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
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Paper from "@mui/material/Paper";
import FormLabel from "@mui/material/FormLabel";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./main.css"



function Main() {
    return (
<div color="accent">
     
        <main>
          <div>
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
               
              </Typography>
              </Container>
              </div>

              <div className="desc">
              <Container>
              <Typography 
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Use the color palette's and search bar below to find design inspiration. Press the color tabs to try out different colors, and use the search function to explore Chicago Art Institute's art collection! Create your aesthetic dream ☁️
              </Typography>
            </Container>
          </div>
        </main>
      </div>
    );
}

export default Main;


