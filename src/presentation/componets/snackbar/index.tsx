import * as React from "react";
import Stack from "@mui/material/Stack";
import { Slide, Snackbar as Snack } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

export interface SnackbarProps {
  handleClick: () => void;
}
interface Props {
  type: "info" | "error" | "success" | "warning";
  message: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Snackbar = React.forwardRef<SnackbarProps, Props>(
  (props: Props, ref) => {
    const [open, setOpen] = React.useState(false);
    React.useImperativeHandle(ref, () => ({
      handleClick() {
        setOpen(true);
      },
    }));

    const handleClose = (
      event?: React.SyntheticEvent | Event,
      reason?: string
    ) => {
      if (reason === "clickaway") {
        return;
      }

      setOpen(false);
    };

    return (
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snack
          TransitionComponent={(props) => <Slide  {...props} direction="left" />}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          open={open}
          autoHideDuration={1500}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={props.type}
            sx={{ width: "100%" }}
          >
            {props.message}
          </Alert>
        </Snack>
      </Stack>
    );
  }
);
