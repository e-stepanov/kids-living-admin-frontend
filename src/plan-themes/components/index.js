import PlanThemeCreate from "./PlanThemeCreate"
import PlanThemeEdit from "./PlanThemeEdit"
import PlanThemeList from "./PlanThemeList"
import PlanThemeShow from "./PlanThemeShow"

const planThemeCRUD = {
  list: PlanThemeList,
  show: PlanThemeShow,
  edit: PlanThemeEdit,
  create: PlanThemeCreate,
}

export default planThemeCRUD
