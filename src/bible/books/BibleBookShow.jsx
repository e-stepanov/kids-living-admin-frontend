import { Add } from "@mui/icons-material"
import {
  Button,
  ShowButton,
  Datagrid,
  NumberField,
  ReferenceManyField,
  Show,
  SimpleShowLayout,
  TextField,
  FunctionField,
  useRecordContext,
} from "react-admin"
import { Link } from "react-router-dom"

function AddNewChapterButton() {
  const record = useRecordContext()
  return (
    <Button
      component={Link}
      to={{
        pathname: "/bible-chapters/create",
        search: `?book=${record ? record.id : ""}`,
      }}
      label="Добавить главу"
    >
      <Add />
    </Button>
  )
}

export default function BibleBookShow() {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="number" label="Номер" />
        <TextField source="title" label="Название" />
        <ReferenceManyField
          label="Глава"
          reference="bible-chapters"
          target="book"
          sort={{ field: "number", order: "ASC" }}
        >
          <Datagrid>
            <FunctionField
              label="Номер"
              render={(record) => `Глава ${record.number}`}
            />
            <ShowButton label="" />
          </Datagrid>
        </ReferenceManyField>
        <AddNewChapterButton />
      </SimpleShowLayout>
    </Show>
  )
}
