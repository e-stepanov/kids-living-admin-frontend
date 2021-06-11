import EditorJS from "react-editor-js"

import { EDITOR_JS_TOOLS } from "./editor-js-tools"

import "./styles.css"

export default function Editor({ onChange, record }) {
  const onChangeInternal = (_api, value) => {
    onChange(value)
  }

  return (
    <EditorJS
      tools={EDITOR_JS_TOOLS}
      data={JSON.parse(record.text)}
      onChange={onChangeInternal}
    />
  )
}
