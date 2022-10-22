import { App } from "@/presentation/page/app";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
