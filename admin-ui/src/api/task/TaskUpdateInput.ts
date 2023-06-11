import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  isCompleted?: boolean | null;
  text?: string | null;
  uid?: UserWhereUniqueInput;
};
