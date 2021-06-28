import { SimpleShowLayout, Show, TextField } from "react-admin"

export default function PlanThemeShow(props) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="name" label="Название" />
      </SimpleShowLayout>
    </Show>
  )
}
