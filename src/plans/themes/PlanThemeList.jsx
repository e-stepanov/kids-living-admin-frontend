import { Datagrid, List, TextField } from "react-admin"

export default function PlanThemeList() {
  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="name" label="Название" />
      </Datagrid>
    </List>
  )
}
