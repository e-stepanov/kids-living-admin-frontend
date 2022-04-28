import { Create, NumberInput, SimpleForm, TextInput } from "react-admin"

export default function BibleBookCreate() {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="number" label="Номер" />
        <TextInput source="title" label="Название" />
      </SimpleForm>
    </Create>
  )
}
