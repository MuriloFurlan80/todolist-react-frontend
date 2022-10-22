import { GetUser } from "@/application/usecase/user/get-user.usecase";
import { IGetUser } from "@/domain/usecase/user/get-user.usecase";
import { makeApiUrl } from "../../environment/url.factory";
import { makeHttpClientFactory } from "../../infra/http/http-client.factory";

export const makeGetUserFactory = (): IGetUser =>
  new GetUser(makeHttpClientFactory(), `${makeApiUrl()}/getuser`);
