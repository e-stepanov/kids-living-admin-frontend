import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin"

export default function BibleBookEdit() {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="number" label="Номер" />
        <TextInput source="title" label="Название" />
      </SimpleForm>
    </Edit>
  )
}
