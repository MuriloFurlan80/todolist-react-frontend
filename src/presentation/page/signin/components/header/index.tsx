import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{
        height: 72
    }}>
      <Toolbar>
        <Typography variant="h6" component="span">
          To Do List
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
