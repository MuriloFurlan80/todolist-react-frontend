import { User } from "@/domain/entity/user";
import { IGetUser } from "@/domain/usecase/user/get-user.usecase";
import { IHttpClient } from "@/infra/http/http-client-adapter";

export class GetUser implements IGetUser {
  constructor(
    private readonly http: IHttpClient,
    private readonly url: string
  ) {}

  async get(): Promise<User> {
    let response = await this.http.request({
      url: this.url,
      method: "get",
    });
    return response.body;
  }
}
