import { Signin } from "@/application/usecase/auth/signin.usecase";
import { makeHttpClientFactory } from "../../infra/http/http-client.factory";

export const makeSigninFactory = () =>
  new Signin(makeHttpClientFactory(), "/auth");
