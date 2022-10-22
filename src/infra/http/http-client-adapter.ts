export interface IHttpClient<T = any> {
  request(data: HttpRequest): Promise<HttpResponse<T>>;
}
export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
};
export type HttpMethod = "post" | "get" | "delete" | "put" | "path" | "options";

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body?: T;
};
export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 404,
  unAuthorized = 401,
  forbiden = 403,
  notFound = 404,
  internalServerError = 500,
  unProcessableEntity = 422,
}
