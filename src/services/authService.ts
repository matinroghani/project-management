import { v4 as uuidv4 } from "uuid";
import type { User } from "../types/auth";

const USER_KEY = "users";
const CURRENT_USER_KEY = "currentUser";

export const register = (
  username: string,
  password: string,
  fullName: string,
  email: string,
  role: string,
  phoneNumber: string,
) => {
  const users: User[] = JSON.parse(localStorage.getItem(USER_KEY) || "[]");
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    throw new Error("User already exists.");
  }
  const newUser: User = {
    id: uuidv4(),
    fullName,
    email,
    role,
    phoneNumber,
    username,
    password,
  };
  users.push(newUser);
  localStorage.setItem(USER_KEY, JSON.stringify(users));
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
  return newUser;
};

export const login = (username: string, password: string) => {
  const users: User[] = JSON.parse(localStorage.getItem(USER_KEY) || "[]");
  const user = users.find(
    (user) => user.username === username && user.password === password,
  );
  if (!user) {
    throw new Error("Invalid username or password");
  }
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  return user;
};

export const logout = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

export const getCurrentUser = (): User | null => {
  return JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || "null");
};
