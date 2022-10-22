import { Authentication } from "@/domain/entity/auth";
import { SigninModel } from "@/domain/model/auth/signin.model";
import { ISignin } from "@/domain/usecase/auth/signin.usecase";
import { IHttpClient } from "@/infra/http/http-client-adapter";

export class Signin implements ISignin {
  constructor(
    private readonly http: IHttpClient,
    private readonly url: string
  ) {}
  async signin(data: SigninModel): Promise<Authentication> {
    let response = await this.http.request({
        url: `${this.url}?email=${data.email}&password=${data.password}`,
        method: "get"
    })
    return response.body;
  }
}
