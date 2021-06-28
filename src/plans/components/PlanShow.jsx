import {
  ChipField,
  ReferenceField,
  ReferenceManyField,
  Show,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
} from "react-admin"

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
        <ReferenceManyField label="Темы" reference="plan-themes" target="plan">
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  )
}
