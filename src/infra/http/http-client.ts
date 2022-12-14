import axios, { AxiosResponse } from "axios";
import {
  HttpRequest,
  HttpResponse,
  IHttpClient,
} from "./http-client-adapter";

export class HttpClient implements IHttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let response: AxiosResponse;

    try {
      response = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error) {
      response = error.response;
    }
    return { statusCode: response.status, body: response.data };
  }
}
