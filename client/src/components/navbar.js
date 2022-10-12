import React, { useContext } from "react";
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
  Button,
} from "@material-ui/core";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, Navigate } from "react-router-dom";
import "./main.css";
import { fontFamily } from "@mui/system";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    navigate("/");
  };
  console.log(user);

  return (
    <>
      <Box
        className="title"
        pt={4}
        pl={4}
        pb={4}
        style={{ backgroundColor: "#9BC2A2"}}
      >
        <Typography variant="h5" align="left" style={{fontWeight: "bold", fontSize: 30}}>
          INSPIRER: An Art & Design Generator
        </Typography>
      </Box>
     
      <AppBar
        className="navBar"
        position="relative"
        style={{ backgroundColor: "#9BC2A2" }}
      >
        <Box alignItems="right" sx={{ flexGrow: 1, textAlign: "right", fontWeight: "bold"}} pl={4}>
          {user ? (
            <>
              <Button className="link2" onClick={onLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" className="link2" style={{fontSize: 23}}>
                Login
              </Link>
              <Link to="/register" className="link2" style={{fontSize: 23}}>
                Register
              </Link>
            </>
          )}
        </Box>
   
        <Tabs className="navTabs" align="center" sx={{fontWeight: "bold"}}>
          <Link to="/" className="link" style={{fontSize: 27}}>
            Home
          </Link>
          <Link to="/profile" className="link" style={{fontSize: 27}}>
            Profile
          </Link>
          <Link to="/shop" className="link" style={{fontSize: 27}}>
            Shop
          </Link>
          <Link to="/install" className="link" style={{fontSize: 27}}>
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
