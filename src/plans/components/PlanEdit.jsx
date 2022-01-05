import {
  Edit,
  FormTab,
  ReferenceArrayInput,
  ReferenceInput,
  SaveButton,
  SelectArrayInput,
  SelectInput,
  TabbedForm,
  TextInput,
  Toolbar,
  required,
} from "react-admin"

import Editor from "core/tiptap/TipTap"
import { useState } from "react"

export default function PlanEdit(props) {
  const [textFieldValue, setTextFieldValue] = useState({})

  const transform = (data) => {
    return {
      ...data,
      text: JSON.stringify(textFieldValue),
    }
  }

  const onEditorChange = ({ editor }) => {
    setTextFieldValue(editor.getJSON())
  }

  // for some unclear reasons transform function passed to
  // Edit element uses initial value of textValue
  const PlanEditToolbar = (props) => (
    <Toolbar {...props}>
      <SaveButton
        label="Сохранить"
        transform={transform}
        submitOnEnter={false}
      />
    </Toolbar>
  )

  return (
    <Edit {...props}>
      <TabbedForm toolbar={<PlanEditToolbar />}>
        <FormTab label="Общее">
          <TextInput source="title" label="Название" fullWidth />
          <TextInput
            source="description"
            label="Описание"
            multiline
            fullWidth
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
            validate={required()}
          >
            <SelectArrayInput optionText="name" />
          </ReferenceArrayInput>
        </FormTab>
        <FormTab label="Текст">
          <Editor onChange={onEditorChange} />
        </FormTab>
      </TabbedForm>
    </Edit>
  )
}
