export type UserContextState = {
  id: string,
  avatar: string,
  email: string,
  username: string,
  auth: boolean,
  signin: () => void,
  signout: () => void
};
