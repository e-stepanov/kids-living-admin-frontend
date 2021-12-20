import TipTap from "core/tiptap/TipTap"

export default {
  title: "TipTap editor",
  component: TipTap,
}

const Template = (args) => <TipTap {...args} />

export const EmptyContent = Template.bind({})
EmptyContent.args = {
  record: {},
}
