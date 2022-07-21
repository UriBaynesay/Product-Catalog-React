import "./assets/styles/main.scss"
import { HomePage } from "./pages/HomePage"
import { AppFooter } from "./cmp/app-footer"
import { AppHeader } from "./cmp/app-header"

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <HomePage />
      </main>
      <AppFooter />
    </div>
  )
}

export default App
