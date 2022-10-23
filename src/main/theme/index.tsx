import { createTheme, ThemeProvider } from "@mui/material";
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
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};