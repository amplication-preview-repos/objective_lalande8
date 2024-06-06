import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { LISTING_TITLE_FIELD } from "../listing/ListingTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Buyer" source="buyer" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Listing" source="listing.id" reference="Listing">
          <TextField source={LISTING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Price" source="price" />
        <TextField label="Seller" source="seller" />
        <TextField label="Status" source="status" />
        <TextField label="Transaction Date" source="transactionDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
