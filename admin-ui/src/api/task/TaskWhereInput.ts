import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskWhereInput = {
  id?: StringFilter;
  isCompleted?: BooleanNullableFilter;
  text?: StringNullableFilter;
  uid?: UserWhereUniqueInput;
};
