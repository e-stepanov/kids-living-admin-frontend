import { Edit, required, SimpleForm, TextInput } from "react-admin"

export default function BibleFragmentEdit(props) {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="title" label="Название" validate={required()} />
      </SimpleForm>
    </Edit>
  )
}
