import { Datagrid, List, TextField } from "react-admin"

export default function BibleChapterList() {
  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="number" />
      </Datagrid>
    </List>
  )
}
