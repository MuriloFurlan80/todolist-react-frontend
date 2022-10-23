import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Header: React.FC = () => {
  return (
    <AppBar color="primary" enableColorOnDark position="static">
      <Toolbar>
        <Typography>To Do List</Typography>
      </Toolbar>
    </AppBar>
  );
};
