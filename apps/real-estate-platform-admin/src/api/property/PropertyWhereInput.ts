import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  city?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  listings?: ListingListRelationFilter;
  lotSize?: FloatNullableFilter;
  numberOfBathrooms?: IntNullableFilter;
  numberOfBedrooms?: IntNullableFilter;
  price?: FloatNullableFilter;
  squareFootage?: IntNullableFilter;
  state?: StringNullableFilter;
  title?: StringNullableFilter;
  typeField?: "Option1";
  zipCode?: StringNullableFilter;
};
