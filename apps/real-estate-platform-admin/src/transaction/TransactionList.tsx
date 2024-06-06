import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LISTING_TITLE_FIELD } from "../listing/ListingTitle";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
