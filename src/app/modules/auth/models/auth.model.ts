export type Login = {
  email: string;
  password: string;
};
export type Register = {
  username: string;
  email: string;
  password: string;
};
export type LoginResponse = {
  token: string;
};
export type RegisterResponse = {
  success: boolean;
};
