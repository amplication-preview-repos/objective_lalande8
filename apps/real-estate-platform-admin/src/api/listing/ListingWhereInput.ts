import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingWhereInput = {
  id?: StringFilter;
  listingDate?: DateTimeNullableFilter;
  price?: FloatNullableFilter;
  property?: PropertyWhereUniqueInput;
  status?: "Option1";
  transactions?: TransactionListRelationFilter;
  user?: UserWhereUniqueInput;
};
