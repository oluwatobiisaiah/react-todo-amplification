import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  isCompleted?: boolean | null;
  text?: string | null;
  uid: UserWhereUniqueInput;
};
