import { useState } from "react"
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
import { makeStyles } from "@material-ui/styles"

import Editor from "core/tiptap/TipTap"

const useStyles = makeStyles({
  editor: {
    maxHeight: "80vh",
    overflow: "scroll",
  },
})

export default function PlanEdit(props) {
  const classes = useStyles()
  const [textFieldValue, setTextFieldValue] = useState({})

  const transform = (data) => {
    return Object.keys(textFieldValue).length > 0
      ? {
          ...data,
          text: JSON.stringify(textFieldValue),
        }
      : data
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
          <Editor onChange={onEditorChange} styles={classes.editor} />
        </FormTab>
      </TabbedForm>
    </Edit>
  )
}
