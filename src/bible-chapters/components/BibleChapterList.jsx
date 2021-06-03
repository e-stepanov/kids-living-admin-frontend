import { Datagrid, List, TextField } from "react-admin"

export default function BibleChapterList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="number" />
      </Datagrid>
    </List>
  )
}
