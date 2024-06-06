import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { TransactionUpdateManyWithoutListingsInput } from "./TransactionUpdateManyWithoutListingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingUpdateInput = {
  listingDate?: Date | null;
  price?: number | null;
  property?: PropertyWhereUniqueInput | null;
  status?: "Option1" | null;
  transactions?: TransactionUpdateManyWithoutListingsInput;
  user?: UserWhereUniqueInput | null;
};
