import * as React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";


export function Header(){
    return (
        <AppBar position="static">
          <Toolbar>            
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" 
              component="div" sx={{ flexGrow: 1 }}>
                <Link  to={"/"} className="btn">
                  <Button color="inherit">Home</Button>
               </Link>
               <Link  to={"/album"} className="btn">
                  <Button color="inherit">Album</Button>
               </Link>
               <Link  to={"/pokemon"} className="btn">
                  <Button color="inherit">Api</Button>
               </Link>
            </Typography>
            <Link  to={"/about"} className="btn">
              <Button color="inherit">About</Button>
              </Link>
          </Toolbar>
        </AppBar>
    );
}