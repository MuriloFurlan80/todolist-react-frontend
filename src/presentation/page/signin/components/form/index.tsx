import { SigninModel } from "@/domain/model/auth/signin.model";
import { AccountCircle, Lock } from "@mui/icons-material";
import {
  FormControl,
  InputAdornment,
  Box,
  Button,
  useTheme,
  TextField,
} from "@mui/material";
import React from "react";

export const Form: React.FC = () => {
  const theme = useTheme();

  const useFormControls = () => {
    const [error, setError] = React.useState({} as any);
    const [state, setState] = React.useState<SigninModel>();
    const handlerEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (
        event.target.value == null ||
        event.target.value == undefined ||
        event.target.value == ""
      ) {
        setError({ email: "Email is required" });
      } else {
        delete error["email"];
        setError(error);
      }
      const form: SigninModel = { ...state, email: event.target.value };
      setState(form);
    };
    const handlerPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (
        event.target.value == null ||
        event.target.value == undefined ||
        event.target.value == ""
      ) {
        setError({ password: "Password is required" });
      } else {
        delete error["password"];
        setError(error);
      }
      const form: SigninModel = { ...state, password: event.target.value };
      setState(form);
    };
    const isValid = () => {
      return state?.email && state?.password;
    };
    return {
      error,
      handlerEmail,
      handlerPassword,
      isValid,
    };
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isValid()) {
      console.log("entrei");
    }
  };
  const { handlerEmail, handlerPassword, error, isValid } = useFormControls();
  return (
    <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
      <FormControl fullWidth variant="filled">
        <TextField
          {...(error["email"] && {
            error: true,
            helperText: error["email"],
          })}
          size="medium"
          onChange={handlerEmail}
          id="email"
          label="Email"
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle sx={{ color: theme.palette.action.disabled }} />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
      <FormControl fullWidth variant="filled">
        <TextField
          {...(error["password"] && {
            error: true,
            helperText: error["password"],
          })}
          size="medium"
          onChange={handlerPassword}
          id="password"
          label="Password"
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock sx={{ color: theme.palette.action.disabled }} />
              </InputAdornment>
            ),
          }}
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
          type="submit"
          disabled={!isValid()}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};
