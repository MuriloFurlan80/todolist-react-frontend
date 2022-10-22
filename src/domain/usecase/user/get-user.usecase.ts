import { User } from "@/domain/entidy/user";

export interface IGetUser {
    get(): Promise<User>
}