import { SigninPage } from "@/presentation/page/signin";
import React from "react";
import { makeSigninFactory } from "../application/auth/signin.factory";
import { Cache } from "@/infra/cache/cache";

export const SigninPageFactory: React.FC = () => {
  return <SigninPage signin={makeSigninFactory()} cache={new Cache()} />;
};
