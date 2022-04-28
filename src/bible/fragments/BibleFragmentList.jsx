import { Datagrid, List, TextField } from "react-admin"

export default function BibleFragmentList() {
  return (
    <List sort={{ field: "start_verse", order: "ASC" }}>
      <Datagrid rowClick="show">
        <TextField source="title" label="Название" />
      </Datagrid>
    </List>
  )
}
