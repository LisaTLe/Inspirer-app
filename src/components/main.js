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



function Main() {
    return (
<div color="accent">
<<<<<<< HEAD
      <Box pt={3} pl={3} pb={1.7}>
        <Typography variant="h5" align="left" color="textSecondary" paragraph>
        INSPIRER: An Art & Design Generator
        </Typography>
      </Box>

        <CssBaseline />
        <AppBar position="relative">
          <tabs align="center"> 
          <Tab label="Generate"/>
          <Tab label="Profile"/>
          <Tab label="Shop"/>
          <Tab label="Explore Pinterest"/>
          
          </tabs>
          <Toolbar>
            <Typography variant="h6"> </Typography>
          </Toolbar>
        </AppBar>
        <main>
=======
       <main>
    <div>
        
    </div>
>>>>>>> e8c05ae447478cb6677a2f7c98f5160a14fa43b6
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
    );
}

export default Main;


