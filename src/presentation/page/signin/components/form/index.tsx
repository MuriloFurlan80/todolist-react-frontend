import { SigninModel } from "@/domain/model/auth/signin.model";
import { ISignin } from "@/domain/usecase/auth/signin.usecase";
import { ICache } from "@/infra/cache/cache-adapter";
import { Snackbar, SnackbarProps } from "@/presentation/componets/snackbar";
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
import { Navigate, useNavigate } from "react-router-dom";
import { useFormControls } from "./componet/formcontrol";

interface Props {
  signin: ISignin;
  cache: ICache;
}

export const Form: React.FC<Props> = ({ signin, cache }) => {
  const theme = useTheme();
  const ref = React.useRef<SnackbarProps>(null);
  const navigate = useNavigate();
  const [stateSnackbar, setStateSnackbar] = React.useState({} as any);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isValid()) {
      signin.signin(state).then((x) => {
        if (x && x.id) {
          cache.set("user", x);
          setStateSnackbar({
            message: "Logged in Successfully",
            type: "success",
          });
          navigate("/home");
        } else {
          setStateSnackbar({
            message: "User or Password is invalid",
            type: "error",
          });
        }
        if (ref.current) ref.current?.handleClick();
      });
    }
  };
  const { handlerEmail, handlerPassword, error, isValid, state } =
    useFormControls();
  return (
    <>
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
                  <AccountCircle
                    sx={{ color: theme.palette.action.disabled }}
                  />
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
      <Snackbar
        message={stateSnackbar["message"]}
        type={stateSnackbar["type"]}
        ref={ref}
      ></Snackbar>
    </>
  );
};
