import { Datagrid, List, TextField } from "react-admin"

export default function PlanList() {
  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="title" label="Название" />
      </Datagrid>
    </List>
  )
}
