import { Show, SimpleShowLayout, TextField } from "react-admin"

export default function PlanShow(props) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="title" label="Название" />
        <TextField source="description" label="Описание" />
      </SimpleShowLayout>
    </Show>
  )
}
