import { Admin, Resource } from "react-admin"
import drfProvider, {
  tokenAuthProvider,
  fetchJsonWithAuthToken,
} from "ra-data-django-rest-framework"

import bibleBooksCRUD from "bible-books/components"
import bibleChaptersCRUD from "bible-chapters/components"
import bibleVerseCRUDD from "bible-verses/components"
import planCRUD from "plans/components"

function App() {
  const dataProvider = drfProvider("/api/v1", fetchJsonWithAuthToken)
  const authProvider = tokenAuthProvider()
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name="bible-books"
        options={{ label: "Книги Библии" }}
        {...bibleBooksCRUD}
      />
      <Resource
        name="bible-chapters"
        options={{ label: "Главы Библии" }}
        {...bibleChaptersCRUD}
      />
      <Resource
        name="bible-verses"
        options={{ label: "Стихи Библии" }}
        {...bibleVerseCRUDD}
      />
      <Resource
        name="plans"
        options={{ label: "Планы собраний" }}
        {...planCRUD}
      />
    </Admin>
  )
}

export default App
