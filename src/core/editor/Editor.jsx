import EditorJS from "react-editor-js"

import { EDITOR_JS_TOOLS } from "./editor-js-tools"

import "./styles.css"

export default function Editor({ onChange, onReady, record }) {
  const onChangeInternal = (_api, value) => {
    onChange(value)
  }

  const text = JSON.parse(record.text || "{}")

  return (
    <EditorJS
      tools={EDITOR_JS_TOOLS}
      data={text}
      onChange={onChangeInternal}
      onReady={() => onReady(text)}
    />
  )
}
