import { User } from "@/domain/entity/user";
import { IGetUser } from "@/domain/usecase/user/get-user.usecase";
import React from "react";

interface Props {
  getuser: IGetUser;
}
export const App: React.FC<Props> = ({ getuser }) => {
  const [users, setUsers] = React.useState<User[]>([]);
  React.useEffect(() => {
    getuser.get().then((users) => setUsers([...users]));
  }, [users.length]);
  return (
    <>
      {users?.map((x) => {
        return (
          <div key={x.userId}>
            {x.userId}-{x.name}
          </div>
        );
      })}
    </>
  );
};
