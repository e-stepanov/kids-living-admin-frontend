import { Edit, TextInput, SimpleForm, required } from "react-admin"

export default function PlanThemeEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput label="Название" source="name" validate={required()} />
      </SimpleForm>
    </Edit>
  )
}
