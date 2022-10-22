import { App } from "@/presentation/page/app";
import { SigninPage } from "@/presentation/page/signin";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeGetUserFactory } from "../factory/application/user/get-user.factory";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App getuser={makeGetUserFactory()} />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
};
