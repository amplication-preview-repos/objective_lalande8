import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { TransactionCreateNestedManyWithoutListingsInput } from "./TransactionCreateNestedManyWithoutListingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingCreateInput = {
  listingDate?: Date | null;
  price?: number | null;
  property?: PropertyWhereUniqueInput | null;
  status?: "Option1" | null;
  transactions?: TransactionCreateNestedManyWithoutListingsInput;
  user?: UserWhereUniqueInput | null;
};
