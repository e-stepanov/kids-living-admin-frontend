import { ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin"

export default function PlanShow(props) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="title" label="Название" />
        <TextField source="description" label="Описание" />
        <ReferenceField
          source="bible_fragment"
          reference="bible-fragments"
          label="Библейский отрывок"
        >
          <TextField source="title" />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  )
}
