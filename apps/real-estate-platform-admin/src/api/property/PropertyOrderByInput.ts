import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  address?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  lotSize?: SortOrder;
  numberOfBathrooms?: SortOrder;
  numberOfBedrooms?: SortOrder;
  price?: SortOrder;
  squareFootage?: SortOrder;
  state?: SortOrder;
  title?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  zipCode?: SortOrder;
};
