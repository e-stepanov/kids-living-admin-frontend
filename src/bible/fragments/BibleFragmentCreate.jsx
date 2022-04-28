import { Box, Typography } from "@mui/material"
import {
  Create,
  FormDataConsumer,
  SimpleForm,
  required,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin"

export default function BibleFragmentCreate() {
  const transform = (data) => ({
    title: data.title,
    start_verse: data.start_verse,
    end_verse: data.end_verse,
  })
  return (
    <Create transform={transform}>
      <SimpleForm>
        <TextInput source="title" label="Название" />
        <Box display="flex">
          <Typography variant="h5">Начало отрывка</Typography>
        </Box>
        <Box display="flex" flexWrap="noWrap" alignContent="flex-start">
          <Box mr={3}>
            <ReferenceInput
              source="start_book"
              label="Книга Библии"
              reference="bible-books"
              sort={{ field: "number", order: "ASC" }}
              validate={required()}
            >
              <SelectInput fullWidth optionText="title" label="Книга Библии" />
            </ReferenceInput>
          </Box>
          <Box mr={3}>
            <FormDataConsumer>
              {({ formData, ...rest }) =>
                formData.start_book && (
                  <ReferenceInput
                    label="Глава"
                    key={formData.start_book}
                    source="start_chapter"
                    filter={{ book: formData.start_book }}
                    sort={{ field: "number", order: "ASC" }}
                    reference="bible-chapters"
                    validate={required()}
                    {...rest}
                  >
                    <SelectInput optionText="number" label="Глава" />
                  </ReferenceInput>
                )
              }
            </FormDataConsumer>
          </Box>
          <Box mr={3}>
            <FormDataConsumer>
              {({ formData, ...rest }) =>
                formData.start_chapter && (
                  <ReferenceInput
                    label="Стих"
                    key={formData.start_chapter}
                    source="start_verse"
                    filter={{ chapter: formData.start_chapter }}
                    sort={{ field: "number", order: "ASC" }}
                    reference="bible-verses"
                    validate={required()}
                    {...rest}
                  >
                    <SelectInput optionText="number" label="Номер" />
                  </ReferenceInput>
                )
              }
            </FormDataConsumer>
          </Box>
        </Box>
        <Box display="flex">
          <Typography variant="h5">Конце отрывка</Typography>
        </Box>
        <Box display="flex" flexWrap="noWrap" alignContent="flex-start">
          <Box mr={3}>
            <ReferenceInput
              source="end_book"
              label="Книга Библии"
              reference="bible-books"
              sort={{ field: "number", order: "ASC" }}
              validate={required()}
            >
              <SelectInput fullWidth optionText="title" label="Книга Библии" />
            </ReferenceInput>
          </Box>
          <Box mr={3}>
            <FormDataConsumer>
              {({ formData, ...rest }) =>
                formData.end_book && (
                  <ReferenceInput
                    label="Глава"
                    key={formData.end_book}
                    source="end_chapter"
                    filter={{ book: formData.end_book }}
                    sort={{ field: "number", order: "ASC" }}
                    reference="bible-chapters"
                    validate={required()}
                    {...rest}
                  >
                    <SelectInput optionText="number" label="Глава" />
                  </ReferenceInput>
                )
              }
            </FormDataConsumer>
          </Box>
          <Box mr={3}>
            <FormDataConsumer>
              {({ formData, ...rest }) =>
                formData.end_chapter && (
                  <ReferenceInput
                    label="Стих"
                    key={formData.end_chapter}
                    source="end_verse"
                    filter={{ chapter: formData.end_chapter }}
                    sort={{ field: "number", order: "ASC" }}
                    reference="bible-verses"
                    validate={required()}
                    {...rest}
                  >
                    <SelectInput optionText="number" label="Стих" />
                  </ReferenceInput>
                )
              }
            </FormDataConsumer>
          </Box>
        </Box>
      </SimpleForm>
    </Create>
  )
}
