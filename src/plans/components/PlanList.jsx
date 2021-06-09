import { Datagrid, List, TextField } from "react-admin"

export default function PlanList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="title" />
      </Datagrid>
    </List>
  )
}
