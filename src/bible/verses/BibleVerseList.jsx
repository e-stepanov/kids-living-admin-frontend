import { Datagrid, List, NumberField, TextField } from "react-admin"

function BibleVerseList() {
  return (
    <List>
      <Datagrid rowClick="show">
        <NumberField source="number" />
        <TextField source="text" />
      </Datagrid>
    </List>
  )
}

export default BibleVerseList
