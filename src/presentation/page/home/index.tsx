import { User } from "@/domain/entity/user";
import { IGetUser } from "@/domain/usecase/user/get-user.usecase";
import React from "react";
import { Header } from "./componentes/header";

interface Props {
  getuser: IGetUser;
}
export const Home: React.FC<Props> = ({ getuser }) => {
  const [users, setUsers] = React.useState<User[]>([]);
  React.useEffect(() => {
    getuser.get().then((users) => setUsers([...users]));
  }, [users.length]);
  return (
   <Header />
  );
};
