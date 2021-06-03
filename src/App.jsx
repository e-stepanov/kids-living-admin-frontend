import { Admin, Resource } from "react-admin"
import drfProvider, {
  tokenAuthProvider,
  fetchJsonWithAuthToken,
} from "ra-data-django-rest-framework"

import bibleBooks from "bible-books/components"
import bibleChapters from "bible-chapters/components"

function App() {
  const dataProvider = drfProvider("/api/v1", fetchJsonWithAuthToken)
  const authProvider = tokenAuthProvider()
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name="bible-books"
        options={{ label: "Книги Библии" }}
        {...bibleBooks}
      />
      <Resource
        name="bible-chapters"
        options={{ label: "Главы Библии" }}
        {...bibleChapters}
      />
    </Admin>
  )
}

export default App
