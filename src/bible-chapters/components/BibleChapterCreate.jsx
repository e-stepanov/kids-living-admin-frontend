import { parse } from "query-string"
import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
} from "react-admin"

export default function BibleChapterCreate(props) {
  const { book: book_id_string } = parse(props.location.search)
  const book = book_id_string ? parseInt(book_id_string, 10) : ""
  const redirect = book ? `/bible-books/${book}/show` : "show"

  return (
    <Create {...props}>
      <SimpleForm initialValues={{ book }} redirect={redirect}>
        <ReferenceInput
          source="book"
          reference="bible-books"
          validate={required()}
        >
          <SelectInput optionText="title" />
        </ReferenceInput>
        <NumberInput source="number" label="Номер" />
      </SimpleForm>
    </Create>
  )
}
