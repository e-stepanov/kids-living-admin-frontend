import Delimiter from "@editorjs/delimiter"
import Embed from "@editorjs/embed"
import Header from "@editorjs/header"
import List from "@editorjs/list"
import Marker from "@editorjs/marker"
import Quote from "@editorjs/quote"
import Table from "@editorjs/table"
import TextVariantTune from "@editorjs/text-variant-tune"
import Underline from "@editorjs/underline"
import Warning from "@editorjs/warning"

export const EDITOR_JS_TOOLS = {
  textVariant: TextVariantTune,
  paragraph: {
    tunes: ["textVariant"],
    config: {
      placeholder: "Напиши здесь что-нибудь...",
    },
  },
  delimiter: {
    class: Delimiter,
    inlineToolbar: true,
  },
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
  list: {
    class: List,
    inlineToolbar: true,
  },
  marker: {
    class: Marker,
    inlineToolbar: true,
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
  },
  table: Table,
  underline: {
    class: Underline,
    inlineToolbar: true,
  },
  warning: {
    class: Warning,
    inlineToolbar: true,
    config: {
      titlePlaceholder: "Название",
      messagePlaceholder: "Сообщение",
    },
  },
}
