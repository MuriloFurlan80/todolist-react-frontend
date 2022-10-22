import {
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
  IHttpClient,
} from "@/infra/http/http-client-adapter";
import { BadRequestException } from "@/main/exception/badrequest";
import { ForbidenException } from "@/main/exception/forbiden";
import { InternalServerErrorException } from "@/main/exception/internal-server-error";
import { NotFoundException } from "@/main/exception/notFound";
import { UnauthorizedException } from "@/main/exception/unauthorized";
import { UnExpectedException } from "@/main/exception/unexpected";
import { UnProcessableEntityException } from "@/main/exception/unprocessable-entity";

export class HttpExceptionDecorator implements IHttpClient {
  constructor(private readonly http: IHttpClient) {}
  async request(data: HttpRequest): Promise<HttpResponse<any>> {
    const response = await this.http.request(data);
    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response;
      case HttpStatusCode.badRequest:
        throw new BadRequestException();
      case HttpStatusCode.forbiden:
        throw new ForbidenException();
      case HttpStatusCode.unProcessableEntity:
        throw new UnProcessableEntityException();
      case HttpStatusCode.internalServerError:
        throw new InternalServerErrorException();
      case HttpStatusCode.unAuthorized:
        throw new UnauthorizedException();
      case HttpStatusCode.notFound:
        throw new NotFoundException();
      default:
        throw new UnExpectedException();
    }
  }
}
