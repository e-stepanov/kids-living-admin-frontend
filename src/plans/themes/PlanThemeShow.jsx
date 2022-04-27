import { SimpleShowLayout, Show, TextField } from "react-admin"

export default function PlanThemeShow() {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="name" label="Название" />
      </SimpleShowLayout>
    </Show>
  )
}
