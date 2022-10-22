import { User } from "@/domain/entity/user";
import { IGetUser } from "@/domain/usecase/user/get-user.usecase";

export class GetUser implements IGetUser {
  get(): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
