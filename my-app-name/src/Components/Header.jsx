import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Box,
} from "@material-ui/core";
import NoteIcon from "@material-ui/icons/Note";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton mr={2} edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Box display="flex" flex="1">
          <Typography variant="h6">Note App</Typography>
        </Box>

        <NoteIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
