import { Create, TextInput, SimpleForm, required } from "react-admin"

export default function PlanThemeCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Название" source="name" validate={required()} />
      </SimpleForm>
    </Create>
  )
}
