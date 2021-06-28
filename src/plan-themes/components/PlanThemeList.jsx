import { Datagrid, List, TextField } from "react-admin"

export default function PlanThemeList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="name" label="Название" />
      </Datagrid>
    </List>
  )
}
