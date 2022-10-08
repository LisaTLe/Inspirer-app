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

export default function navbar() {
  return (
<>
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
   
   </>
  );
}


 // <div className="navbar">
    //   <div className="wrapper">
    //     <div className="left">
    //       <a href="#home" className="title">
    //         Name of application here
    //       </a>
    //       <a href="#home" className="home-nav">
    //         Home
    //       </a>
    //       <a href="#generate" className="generate-nav">
    //         Generate
    //       </a>
    //       <a href="#profile" className="profile-nav">
    //         Profile
    //       </a>
    //       <a href="#explore" className="explore-nav">
    //         Explore Pinterest
    //       </a>
    //       <a href="#shop" className="shop-nav">
    //         Shop
    //       </a>
    //     </div>
    //   </div>
    // </div>