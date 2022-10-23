import { App } from "@/presentation/page/app";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeGetUserFactory } from "../factory/application/user/get-user.factory";
import { SigninPageFactory } from "../factory/page/signin.factory";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App getuser={makeGetUserFactory()} />} />
        <Route path="/signin" element={<SigninPageFactory />} />
      </Routes>
    </BrowserRouter>
  );
};
