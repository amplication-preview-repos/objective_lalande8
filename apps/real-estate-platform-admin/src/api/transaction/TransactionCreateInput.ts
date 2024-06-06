import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type TransactionCreateInput = {
  buyer?: string | null;
  listing?: ListingWhereUniqueInput | null;
  price?: number | null;
  seller?: string | null;
  status?: "Option1" | null;
  transactionDate?: Date | null;
};
