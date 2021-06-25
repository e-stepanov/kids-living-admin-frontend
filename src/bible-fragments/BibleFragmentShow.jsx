import { SimpleShowLayout, Show, TextField } from "react-admin"

export default function BibleFragmentShow(props) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="title" label="Название" />
      </SimpleShowLayout>
    </Show>
  )
}
