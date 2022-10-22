import { Authentication } from "@/domain/entity/auth";
import { SigninModel } from "@/domain/model/auth/signin.model";

export interface ISignin {
  signin(data: SigninModel): Promise<Authentication>;
}
