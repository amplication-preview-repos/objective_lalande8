import { ListingUpdateManyWithoutPropertiesInput } from "./ListingUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  city?: string | null;
  description?: string | null;
  listings?: ListingUpdateManyWithoutPropertiesInput;
  lotSize?: number | null;
  numberOfBathrooms?: number | null;
  numberOfBedrooms?: number | null;
  price?: number | null;
  squareFootage?: number | null;
  state?: string | null;
  title?: string | null;
  typeField?: "Option1" | null;
  zipCode?: string | null;
};
