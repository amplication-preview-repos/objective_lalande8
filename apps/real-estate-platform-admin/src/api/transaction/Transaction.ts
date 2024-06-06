import { Listing } from "../listing/Listing";

export type Transaction = {
  buyer: string | null;
  createdAt: Date;
  id: string;
  listing?: Listing | null;
  price: number | null;
  seller: string | null;
  status?: "Option1" | null;
  transactionDate: Date | null;
  updatedAt: Date;
};
