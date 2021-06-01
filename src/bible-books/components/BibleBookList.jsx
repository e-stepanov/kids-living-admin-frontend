import { Datagrid, List, TextField } from "react-admin"

export default function BibleBookList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="number" />
        <TextField source="title" />
      </Datagrid>
    </List>
  )
}
