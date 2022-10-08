import * as React from "react";
import Main from "./components/main";
import Colors from "./components/generator";
import Navbar from './components/navbar'
// import logo from "./logo.svg";
import "./App.css";

import { search } from "./routes/chiArtApi";
import Search from "./routes/search-art";
import SearchResults from "./routes/searchresults-art";


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
    <div id="root">
    <Navbar />
      <Main />
      <Colors />
    </div>
  );
}

export default App;
