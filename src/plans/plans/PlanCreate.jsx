import {
  Create,
  FormTab,
  ReferenceArrayInput,
  ReferenceInput,
  required,
  SaveButton,
  SelectArrayInput,
  SelectInput,
  TabbedForm,
  TextInput,
  Toolbar,
} from "react-admin"
import { RichTextInput } from "ra-input-rich-text"

export default function PlanEdit() {
  const PlanCreateToolbar = () => (
    <Toolbar>
      <SaveButton label="Сохранить" />
    </Toolbar>
  )

  return (
    <Create>
      <TabbedForm toolbar={<PlanCreateToolbar />}>
        <FormTab label="Общее">
          <TextInput
            source="title"
            label="Название"
            fullWidth
            validate={required()}
          />
          <TextInput
            source="description"
            label="Описание"
            multiline
            fullWidth
            validate={required()}
          />
          <ReferenceInput
            source="bible_fragment"
            reference="bible-fragments"
            label="Библейский отрывок"
            sort={{ field: "start_verse", order: "ASC" }}
          >
            <SelectInput optionText="title" label="Библейский отрывок" />
          </ReferenceInput>
          <ReferenceArrayInput
            source="themes"
            reference="plan-themes"
            label="Темы"
            sort={{ field: "name", order: "ASC" }}
            validate={required()}
          >
            <SelectArrayInput optionText="name" />
          </ReferenceArrayInput>
        </FormTab>
        <FormTab label="Текст">
          <RichTextInput source="text" fullWidth />
        </FormTab>
      </TabbedForm>
    </Create>
  )
}
