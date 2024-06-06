import { ListingCreateNestedManyWithoutPropertiesInput } from "./ListingCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  city?: string | null;
  description?: string | null;
  listings?: ListingCreateNestedManyWithoutPropertiesInput;
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
