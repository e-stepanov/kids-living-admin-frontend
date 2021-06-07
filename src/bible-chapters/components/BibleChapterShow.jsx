import {
  Datagrid,
  NumberField,
  ReferenceField,
  ReferenceManyField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin"
import BibleVerseQuickCreateButton from "bible-verses/components/BibleVerseQuickCreate"
import { useCallback, useState } from "react"

export default function BibleChapterShow(props) {
  const [version, setVersion] = useState(0)
  const handleBibleVerseCreation = useCallback(
    () => setVersion(version + 1),
    [version]
  )
  const { id: chapter } = props
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Книга" source="book" reference="bible-books">
          <TextField source="title" />
        </ReferenceField>
        <NumberField source="number" label="Номер главы" />
        <ReferenceManyField
          key={version}
          label="Стихи"
          reference="bible-verses"
          target="chapter"
          sort={{ field: "number", order: "ASC" }}
        >
          <Datagrid>
            <NumberField source="number" />
            <TextField source="text" />
          </Datagrid>
        </ReferenceManyField>
        <BibleVerseQuickCreateButton
          onChange={handleBibleVerseCreation}
          chapter={chapter}
        />
      </SimpleShowLayout>
    </Show>
  )
}
