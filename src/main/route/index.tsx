import { Home } from "@/presentation/page/home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeGetUserFactory } from "../factory/application/user/get-user.factory";
import { SigninPageFactory } from "../factory/page/signin.factory";
import { ProtecetRoute } from "./protected-route";
import { RedirectUser } from "./redirect-user";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtecetRoute>
              <Home getuser={makeGetUserFactory()} />
            </ProtecetRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <RedirectUser>
              <SigninPageFactory />
            </RedirectUser>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
