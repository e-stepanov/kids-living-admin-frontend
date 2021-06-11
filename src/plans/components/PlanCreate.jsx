import {
  Create,
  TabbedForm,
  Toolbar,
  SaveButton,
  FormTab,
  TextInput,
} from "react-admin"

import Editor from "core/editor/Editor"
import { useState } from "react"

export default function PlanEdit(props) {
  const [textFieldValue, setTextFieldValue] = useState("")

  const onChange = (value) => {
    setTextFieldValue(value)
  }

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
          <TextInput source="title" label="Название" fullWidth />
          <TextInput
            source="description"
            label="Описание"
            multiline
            fullWidth
          />
        </FormTab>
        <FormTab label="Текст">
          <Editor onChange={onChange} />
        </FormTab>
      </TabbedForm>
    </Create>
  )
}
