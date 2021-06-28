import {
  LibraryBooks,
  LocalLibrary,
  LocalOffer,
  MenuBook,
} from "@material-ui/icons"
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
        leftIcon={<MenuBook />}
      />
      <MenuItemLink
        to={"/plan-themes"}
        primaryText="Темы"
        leftIcon={<LocalOffer />}
      />
      <MenuItemLink
        to={"/plans"}
        primaryText="Планы"
        leftIcon={<LibraryBooks />}
      />
    </div>
  )
}
