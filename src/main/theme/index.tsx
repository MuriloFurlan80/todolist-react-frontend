import { Css } from "@mui/icons-material";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const ThemeContext: React.FC<Props> = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#533D88",
        light: "#857DB1",
        dark: "#3C1A7D",
      },
    },
  });
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
};
