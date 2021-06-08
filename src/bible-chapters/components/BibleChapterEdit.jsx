import { Box } from "@material-ui/core"
import { useState } from "react"
import {
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  required,
} from "react-admin"
import EditorJS from "react-editor-js"
import { EDITOR_JS_TOOLS } from "core/editor-js-tools"
import "react-quill/dist/quill.snow.css"

export default function BibleChapterEdit(props) {
  const [value, setValue] = useState("")
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="book"
          reference="bible-books"
          validate={required()}
        >
          <SelectInput optionText="title" label="Книга" />
        </ReferenceInput>
        <NumberInput source="number" label="Номер главы" />
        <EditorJS tools={EDITOR_JS_TOOLS} />
      </SimpleForm>
    </Edit>
  )
}
