import { Edit, TextInput, SimpleForm, required } from "react-admin"

export default function PlanThemeEdit(props) {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Название" source="name" validate={required()} />
      </SimpleForm>
    </Edit>
  )
}
