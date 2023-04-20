export interface IUser {
  id: string;
  name: string;
  message: string;
}

export type IMessages = Array<IUser>;
