import { v4 as uuidv4 } from "uuid";

export const initUsers = () => {
  const users = localStorage.getItem("users");
  if (!users) {
    const defaultUsers = [
      {
        id: uuidv4(),
        username: "1",
        password: "1",
      },
    ];
    localStorage.setItem("users", JSON.stringify(defaultUsers));
  }
};
