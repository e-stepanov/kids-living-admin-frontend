import { Edit, required, SimpleForm, TextInput } from "react-admin"

export default function BibleFragmentEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" label="Название" validate={required()} />
      </SimpleForm>
    </Edit>
  )
}
