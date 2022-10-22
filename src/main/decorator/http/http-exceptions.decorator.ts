import { HttpRequest, HttpResponse, IHttpClient } from "@/infra/http/http-client-adapter";

export class HttpExceptionDecorator implements IHttpClient{
    request(data: HttpRequest): Promise<HttpResponse<any>> {
        throw new Error("Method not implemented.");
    }

}