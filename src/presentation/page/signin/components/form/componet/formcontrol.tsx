import { SigninModel } from "@/domain/model/auth/signin.model";
import React from "react";


export const useFormControls = () => {
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
    state,
  };
};
