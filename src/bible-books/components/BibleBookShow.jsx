import { Add } from "@material-ui/icons"
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
} from "react-admin"
import { Link } from "react-router-dom"

function AddNewChapterButton({ record }) {
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

export default function BibleBookShow(props) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <NumberField source="number" label="Номер" />
        <TextField source="title" label="Название" />
        <ReferenceManyField
          label="Главы"
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
