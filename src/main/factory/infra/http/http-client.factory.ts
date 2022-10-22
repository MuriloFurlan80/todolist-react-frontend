import { HttpClient } from "@/infra/http/http-client";
import { IHttpClient } from "@/infra/http/http-client-adapter";

export const makeHttpClientFactory = (): IHttpClient => new HttpClient()