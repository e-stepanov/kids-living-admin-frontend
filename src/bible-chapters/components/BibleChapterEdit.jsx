import {
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  required,
} from "react-admin"

export default function BibleChapterEdit(props) {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="book"
          reference="bible-books"
          validate={required()}
        >
          <SelectInput optionText="title" />
        </ReferenceInput>
        <NumberInput source="number" label="Номер" />
      </SimpleForm>
    </Edit>
  )
}
