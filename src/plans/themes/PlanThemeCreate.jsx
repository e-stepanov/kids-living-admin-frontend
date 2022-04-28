import { Create, TextInput, SimpleForm, required } from "react-admin"

export default function PlanThemeCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput label="Название" source="name" validate={required()} />
      </SimpleForm>
    </Create>
  )
}
