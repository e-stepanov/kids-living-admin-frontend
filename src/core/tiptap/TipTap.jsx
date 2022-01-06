import PropTypes from "prop-types"

import classnames from "classnames"
import { makeStyles } from "@material-ui/core"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import BoldIcon from "remixicon-react/BoldIcon"
import ListUnorderedIcon from "remixicon-react/ListUnorderedIcon"
import ListOrderedIcon from "remixicon-react/ListOrderedIcon"
import FormatClearIcon from "remixicon-react/FormatClearIcon"
import ItalicIcon from "remixicon-react/ItalicIcon"
import H1Icon from "remixicon-react/H1Icon"
import H2Icon from "remixicon-react/H2Icon"
import H3Icon from "remixicon-react/H3Icon"
import StrikethroughIcon from "remixicon-react/StrikethroughIcon"
import ArrowGoBackLineIcon from "remixicon-react/ArrowGoBackLineIcon"
import ArrowGoForwardIcon from "remixicon-react/ArrowGoForwardLineIcon"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    border: "1px solid #ddd",
    padding: theme.spacing(2),
    borderRadius: 10,
  },

  menu: {
    position: "sticky",
    top: 10,
    borderBottom: "1px solid #ddd",
    backgroundColor: "white",
    zIndex: 2,
  },

  button: {
    border: "1px solid white",
    borderRadius: 3,
    padding: 3,
    marginLeft: theme.spacing(0.2),
    color: "#aaa",
  },

  selectedButton: {
    border: "1px solid #999",
    borderRadius: 3,
    padding: 3,
    marginLeft: theme.spacing(0.2),
    color: "#555",
  },

  editor: {
    "& .ProseMirror": {
      outline: "none",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
}))

function MenuBar({ editor }) {
  const classes = useStyles()
  if (!editor) {
    return null
  }

  return (
    <div className={classes.menu}>
      <BoldIcon
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold") ? classes.selectedButton : classes.button
        }
      />
      <ItalicIcon
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic") ? classes.selectedButton : classes.button
        }
      />
      <StrikethroughIcon
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={
          editor.isActive("strike") ? classes.selectedButton : classes.button
        }
      />
      <FormatClearIcon
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className={classes.button}
      />
      <H1Icon
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 })
            ? classes.selectedButton
            : classes.button
        }
      />
      <H2Icon
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? classes.selectedButton
            : classes.button
        }
      />
      <H3Icon
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive("heading", { level: 3 })
            ? classes.selectedButton
            : classes.button
        }
      />
      <ListUnorderedIcon
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive("bulletList")
            ? classes.selectedButton
            : classes.button
        }
      />
      <ListOrderedIcon
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive("orderedList")
            ? classes.selectedButton
            : classes.button
        }
      />
      <ArrowGoBackLineIcon
        onClick={() => editor.chain().focus().undo().run()}
        className={classes.button}
      />
      <ArrowGoForwardIcon
        onClick={() => editor.chain().focus().redo().run()}
        className={classes.button}
      />
    </div>
  )
}

export default function TipTap({ record, onChange, styles }) {
  const classes = useStyles()
  const editor = useEditor({
    extensions: [StarterKit],
    content: {
      type: "doc",
      content: JSON.parse(record.text).content || [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "",
            },
          ],
        },
      ],
    },
    onUpdate: onChange,
  })

  return (
    <div className={classnames(classes.root, styles)}>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className={classes.editor} />
    </div>
  )
}

TipTap.propTypes = {
  record: PropTypes.shape({
    text: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
}
