import { Signin } from "@/application/usecase/auth/signin.usecase";
import { HttpExceptionDecorator } from "@/main/decorator/http/http-exceptions.decorator";
import { makeApiUrl } from "../../environment/url.factory";
import { makeHttpClientFactory } from "../../infra/http/http-client.factory";

export const makeSigninFactory = () =>
  new Signin(
    new HttpExceptionDecorator(makeHttpClientFactory()),
    `${makeApiUrl()}/auth`
  );
