import { Property } from "../property/Property";
import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type Listing = {
  createdAt: Date;
  id: string;
  listingDate: Date | null;
  price: number | null;
  property?: Property | null;
  status?: "Option1" | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  user?: User | null;
};
