import { AccountCircle, Lock } from "@mui/icons-material";
import { FormControl, InputLabel, FilledInput, InputAdornment, Box, Button, useTheme } from "@mui/material";
import React from "react";

export const Form: React.FC = () => {
    const theme = useTheme();
    return (
        <React.StrictMode>
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
        </React.StrictMode>
    )
}