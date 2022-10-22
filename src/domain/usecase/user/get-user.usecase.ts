import { User } from "@/domain/entity/user";

export interface IGetUser {
    get(): Promise<User>
}