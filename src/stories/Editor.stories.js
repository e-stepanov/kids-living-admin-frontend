import Editor from "core/editor/Editor"

export default {
  title: "Rich text editor",
  component: Editor,
}

const Template = (args) => <Editor {...args} />

export const EmptyContent = Template.bind({})
EmptyContent.args = {
  onChange: () => {},
  onReady: () => {},
  record: {},
}
