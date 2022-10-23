import { AccountCircle, Lock } from "@mui/icons-material";
import {
  useTheme,
  Box,
  Container,
  Typography,
  FormControl,
  FormGroup,
  TextField,
  Button,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FilledInput,
} from "@mui/material";
import React from "react";
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
            <FormControl fullWidth variant="filled">
              <InputLabel htmlFor="email">Email</InputLabel>
              <FilledInput
                size="medium"
                id="email"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle
                      sx={{
                        color: theme.palette.action.disabled,
                      }}
                    />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth variant="filled">
            <InputLabel htmlFor="password">Password</InputLabel>
              <FilledInput
                size="medium"
                id="password"
                startAdornment={
                  <InputAdornment position="start">
                    <Lock
                      sx={{
                        color: theme.palette.action.disabled,
                      }}
                    />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="medium"
                  sx={{
                    mt: 6,
                  }}
                >
                  Submit
                </Button>
              </Box>
          </Box>
        </Box>
      </Container>
    </React.StrictMode>
  );
};
