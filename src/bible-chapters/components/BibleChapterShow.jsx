import { NumberField, Show, SimpleShowLayout } from "react-admin"

export default function BibleChapterShow(props) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <NumberField source="number" label="Номер" />
      </SimpleShowLayout>
    </Show>
  )
}
