import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  buyer?: StringNullableFilter;
  id?: StringFilter;
  listing?: ListingWhereUniqueInput;
  price?: FloatNullableFilter;
  seller?: StringNullableFilter;
  status?: "Option1";
  transactionDate?: DateTimeNullableFilter;
};
