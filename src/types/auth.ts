export interface User {
  id: string;
  fullName: string;
  email: string;
  role: string;
  phoneNumber: string;
  username: string;
  password: string;
  avatar ?: string| null
}
