export type User = {
    id: number;
    name: string;
    phoneNumber: string;
    avatar: string;
    status: UserStatus;
}
export enum UserStatus{
    online, 
    busy,
    away,
    inative,
}