import { Cache } from "@/infra/cache/cache";
import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}
export const RedirectUser: React.FC<Props> = ({ children }) => {
  const cache = new Cache();
  const user = cache.get("user");
  if (!user){
    return <>{children}</>;
  } else {
    return <Navigate to="/home" replace />;
  }
};
