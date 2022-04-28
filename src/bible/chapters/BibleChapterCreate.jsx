import { parse } from "query-string"
import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
} from "react-admin"
import { useLocation } from "react-router-dom"

export default function BibleChapterCreate() {
  const location = useLocation()
  const { book: book_id_string } = parse(location.search)
  const book = book_id_string ? parseInt(book_id_string, 10) : ""
  const redirect = book ? `/bible-books/${book}/show` : "show"

  return (
    <Create>
      <SimpleForm defaultValues={{ book }} redirect={redirect}>
        <ReferenceInput
          source="book"
          reference="bible-books"
          validate={required()}
        >
          <SelectInput optionText="title" label="Книга" />
        </ReferenceInput>
        <NumberInput source="number" label="Номер" />
      </SimpleForm>
    </Create>
  )
}
