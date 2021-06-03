import BibleChapterCreate from "./BibleChapterCreate"
import BibleChapterEdit from "./BibleChapterEdit"
import BibleChapterList from "./BibleChapterList"
import BibleChapterShow from "./BibleChapterShow"

const bibleChapters = {
  list: BibleChapterList,
  show: BibleChapterShow,
  create: BibleChapterCreate,
  edit: BibleChapterEdit,
}
export default bibleChapters
