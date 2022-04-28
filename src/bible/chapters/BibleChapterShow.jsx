import {
  Datagrid,
  NumberField,
  ReferenceField,
  ReferenceManyField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin"
import { useParams } from "react-router-dom"
import BibleVerseQuickCreateButton from "bible/verses/BibleVerseQuickCreateButton"
import { useCallback, useState } from "react"

export default function BibleChapterShow() {
  const [version, setVersion] = useState(0)
  const handleBibleVerseCreation = useCallback(
    () => setVersion(version + 1),
    [version]
  )
  const { id: chapter } = useParams()
  return (
    <Show>
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
