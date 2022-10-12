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
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./main.css";

function Main() {
    return (
<div>
        <main style={{backgroundColor: "#9BC2A2"}}>
          <div style={{backgroundColor: "#9BC2A2"}}>
            <Container maxWidth="sm">
              <Typography className="tabTabs"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
               
              </Typography>
              </Container>
              </div>

              <div>
              <Container className="desc">
              <Typography 
                variant="h5"
                align="center"
                color="#ffffff"
                paragraph
              >
                Use the color palette's and search bar below to find design inspiration. Press the color tabs to try out different colors, and use the search function to explore Chicago Art Institute's art collection! Create your aesthetic ☁️
              </Typography>
            </Container>
          </div>
        </main>
      </div>
    );
}

export default Main;
