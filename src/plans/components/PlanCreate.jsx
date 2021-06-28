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

import Editor from "core/editor/Editor"
import { useState } from "react"

export default function PlanEdit(props) {
  const [textFieldValue, setTextFieldValue] = useState("")

  const transform = (data) => {
    return {
      ...data,
      text: JSON.stringify(textFieldValue),
    }
  }

  // for some unclear reasons transform function passed to
  // Edit element uses initial value of textValue
  const PlanCreateToolbar = (props) => (
    <Toolbar {...props}>
      <SaveButton
        label="Сохранить"
        transform={transform}
        submitOnEnter={false}
      />
    </Toolbar>
  )

  return (
    <Create {...props}>
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
            label="Темы планов"
            sort={{ field: "name", order: "ASC" }}
          >
            <SelectArrayInput optionText="name" />
          </ReferenceArrayInput>
        </FormTab>
        <FormTab label="Текст">
          <Editor onChange={setTextFieldValue} onReady={setTextFieldValue} />
        </FormTab>
      </TabbedForm>
    </Create>
  )
}
