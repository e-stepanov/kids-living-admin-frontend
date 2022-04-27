import { Datagrid, List, NumberField, TextField } from "react-admin"

export default function BibleBookList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <NumberField source="number" textAlign="left" label="Номер" />
        <TextField source="title" label="Название" />
      </Datagrid>
    </List>
  )
}
