export type SignUpdata = {
  name: string;
  email: string;
  password: string;
};

export type SignUpResponse = {
  id: string;
  name: string;
  email: string;
};

export type SignInData = {
  email: string;
  password: string;
};

export type SignInResponse = {
  token: string;
};
