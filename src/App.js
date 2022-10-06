import * as React from 'react';

// import logo from "./logo.svg";
import "./App.css";
import Search from "./routes/chiArtApi.js"

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


function App() {
  
  return (
    <>
    
      <div color="accent">
        <Typography variant="h5" align="left" color="textSecondary" paragraph>
          THIS IS APPLICATION TITLE
        </Typography>
        <CssBaseline />
        <AppBar position="relative">
          <tabs align="center"> 
          <Tab label="Generate"/>
          <Tab label="Profile"/>
          <Tab label="Explore Pinterest"/>
          <Tab label="Shop"/>
          
          </tabs>
          <Toolbar>
            <Typography variant="h6"> </Typography>
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
              </Container>
              </div>

              <div>
              <Container>
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
