import { Edit, TabbedForm, FormTab, TextInput } from "react-admin"

export default function PlanEdit(props) {
  return (
    <Edit {...props}>
      <TabbedForm>
        <FormTab label="Общее">
          <TextInput source="title" label="Название" />
          <TextInput source="description" label="Описание" />
        </FormTab>
        <FormTab label="Текст">
          <TextInput source="text" label="Текст" />
        </FormTab>
      </TabbedForm>
    </Edit>
  )
}
