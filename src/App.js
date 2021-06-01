import { Admin, Resource } from "react-admin"
import drfProvider, {
  tokenAuthProvider,
  fetchJsonWithAuthToken,
} from "ra-data-django-rest-framework"

import BibleBookCreate from "bible-books/components/BibleBookCreate"
import BibleBookEdit from "bible-books/components/BibleBookEdit"
import BibleBookList from "bible-books/components/BibleBookList"

function App() {
  const dataProvider = drfProvider("/api/v1", fetchJsonWithAuthToken)
  const authProvider = tokenAuthProvider()
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name="bible-books"
        options={{ label: "Книги Библии" }}
        list={BibleBookList}
        edit={BibleBookEdit}
        create={BibleBookCreate}
      />
    </Admin>
  )
}

export default App
