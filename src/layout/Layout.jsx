import { Layout as RALayout } from "react-admin"

import Menu from "./Menu"

export default function Layout(props) {
  return <RALayout {...props} menu={Menu} />
}
