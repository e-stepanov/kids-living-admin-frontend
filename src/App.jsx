import { Admin, Resource } from "react-admin"
import drfProvider, {
  tokenAuthProvider,
  fetchJsonWithAuthToken,
} from "ra-data-django-rest-framework"

import bibleBooksResource from "bible/books"
import bibleChaptersResource from "bible/chapters"
import bibleFragmentsResource from "bible/fragments"
import bibleVersesResource from "bible/verses"
import apiUrl from "core/apiUrl"
import Layout from "layout/Layout"
import planThemesResource from "plans/themes"
import plansResource from "plans/plans"

function App() {
  const dataProvider = drfProvider(apiUrl, fetchJsonWithAuthToken)
  const authProvider = tokenAuthProvider({
    obtainAuthTokenUrl: `${apiUrl}/api-token-auth/`,
  })
  return (
    <Admin
      title="Kids living blog"
      dataProvider={dataProvider}
      authProvider={authProvider}
    layout={Layout}
    >
      <Resource
        name="bible-books"
        options={{ label: "Книги Библии" }}
        {...bibleBooksResource}
      />
      <Resource
        name="bible-chapters"
        options={{ label: "Главы Библии" }}
        {...bibleChaptersResource}
      />
      <Resource
        name="bible-verses"
        options={{ label: "Стихи Библии" }}
        {...bibleVersesResource}
      />
      <Resource
        name="bible-fragments"
        options={{ label: "Библейские отрывки" }}
        {...bibleFragmentsResource}
      />
      <Resource
        name="plan-themes"
        options={{ label: "Темы" }}
        {...planThemesResource}
      />
      <Resource
        name="plans"
        options={{ label: "Планы собраний" }}
        {...plansResource}
      />
    </Admin>
  )
}

export default App
