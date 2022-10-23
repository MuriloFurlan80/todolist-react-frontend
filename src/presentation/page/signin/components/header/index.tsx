import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="span">
          To Do List
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
