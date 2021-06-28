import { Admin, Resource } from "react-admin"
import drfProvider, {
  tokenAuthProvider,
  fetchJsonWithAuthToken,
} from "ra-data-django-rest-framework"

import bibleBooksCRUD from "bible-books/components"
import bibleChaptersCRUD from "bible-chapters/components"
import bibleFragmentsLCRUD from "bible-fragments"
import bibleVerseCRUDD from "bible-verses/components"
import apiUrl from "core/apiUrl"
import Layout from "layout/Layout"
import planCRUD from "plans/components"
import planThemeCRUD from "plan-themes/components"

function App() {
  const dataProvider = drfProvider(apiUrl, fetchJsonWithAuthToken)
  const authProvider = tokenAuthProvider({
    obtainAuthTokenUrl: `${apiUrl}/api-token-auth/`,
  })
  return (
    <Admin
      title=""
      dataProvider={dataProvider}
      authProvider={authProvider}
      layout={Layout}
    >
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
        name="bible-fragments"
        options={{ label: "Библейские отрывки" }}
        {...bibleFragmentsLCRUD}
      />
      <Resource
        name="plan-themes"
        options={{ label: "Темы" }}
        {...planThemeCRUD}
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
