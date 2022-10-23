import { useTheme, Box, Container, Typography } from "@mui/material";
import React from "react";
import { Form } from "./components/form";
import { Header } from "./components/header";

export const SigninPage: React.FC = () => {
  const theme = useTheme();
  return (
    <React.StrictMode>
      <Header />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 72px)",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            component="span"
            sx={{
              color: theme.palette.text.disabled,
              lineHeight: "4em",
            }}
          >
            Signin
          </Typography>
          <Box
            sx={{
              background: theme.palette.action.hover,
              width: "70%",
              height: 450,
              borderRadius: "8px",
              padding: 18,
            }}
          >
            <Form />
          </Box>
        </Box>
      </Container>
    </React.StrictMode>
  );
};
