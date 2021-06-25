import { LibraryBooks, LocalLibrary } from "@material-ui/icons"
import { MenuItemLink } from "react-admin"

export default function Menu() {
  return (
    <div>
      <MenuItemLink
        to={"/bible-books"}
        primaryText="Библия"
        leftIcon={<LocalLibrary />}
      />
      <MenuItemLink
        to={"/bible-fragments"}
        primaryText="Библейские отрывки"
        leftIcon={<LocalLibrary />}
      />
      <MenuItemLink
        to={"/plans"}
        primaryText="Планы"
        leftIcon={<LibraryBooks />}
      />
    </div>
  )
}
