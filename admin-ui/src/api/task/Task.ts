import { User } from "../user/User";

export type Task = {
  createdAt: Date;
  id: string;
  isCompleted: boolean | null;
  text: string | null;
  uid?: User;
  updatedAt: Date;
};
