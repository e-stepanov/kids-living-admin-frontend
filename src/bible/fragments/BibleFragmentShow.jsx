import { SimpleShowLayout, Show, TextField } from "react-admin"

export default function BibleFragmentShow() {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="title" label="Название" />
      </SimpleShowLayout>
    </Show>
  )
}
