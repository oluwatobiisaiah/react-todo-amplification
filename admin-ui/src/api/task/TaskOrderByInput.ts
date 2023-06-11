import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isCompleted?: SortOrder;
  text?: SortOrder;
  uidId?: SortOrder;
  updatedAt?: SortOrder;
};
