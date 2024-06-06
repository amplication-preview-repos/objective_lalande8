import { Listing } from "../listing/Listing";

export type Property = {
  address: string | null;
  city: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  listings?: Array<Listing>;
  lotSize: number | null;
  numberOfBathrooms: number | null;
  numberOfBedrooms: number | null;
  price: number | null;
  squareFootage: number | null;
  state: string | null;
  title: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  zipCode: string | null;
};
