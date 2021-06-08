import Embed from "@editorjs/embed"
import Header from "@editorjs/header"
import List from "@editorjs/list"
import Quote from "@editorjs/quote"

export const EDITOR_JS_TOOLS = {
  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        coub: true,
      },
    },
  },
  header: {
    class: Header,
    inlineToolbar: true,
  },
  list: List,
  quote: Quote,
}
