import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  buyer?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  listingId?: SortOrder;
  price?: SortOrder;
  seller?: SortOrder;
  status?: SortOrder;
  transactionDate?: SortOrder;
  updatedAt?: SortOrder;
};
