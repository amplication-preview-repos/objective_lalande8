import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  SelectInput,
} from "react-admin";

import { ListingTitle } from "../listing/ListingTitle";

export const PropertyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="City" source="city" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="listings"
          reference="Listing"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ListingTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Lot Size" source="lotSize" />
        <NumberInput
          step={1}
          label="Number of Bathrooms"
          source="numberOfBathrooms"
        />
        <NumberInput
          step={1}
          label="Number of Bedrooms"
          source="numberOfBedrooms"
        />
        <NumberInput label="Price" source="price" />
        <NumberInput step={1} label="Square Footage" source="squareFootage" />
        <TextInput label="State" source="state" />
        <TextInput label="Title" source="title" />
        <SelectInput
          source="typeField"
          label="Type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Zip Code" source="zipCode" />
      </SimpleForm>
    </Edit>
  );
};
