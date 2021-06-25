import {
  Edit,
  SimpleForm,
  required,
  ReferenceInput,
  SelectInput,
} from "react-admin"

export default function BibleFragmentEdit(props) {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          label="Книга Библии"
          reference="bible-books"
          validate={required()}
        >
          <SelectInput optionText="bible-book" label="Книга Библии" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  )
}
