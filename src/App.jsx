import "./assets/styles/main.scss"
import { ProductsCatalogApp } from "./pages/ProductsCatalogApp"
import { AppFooter } from "./cmp/app-footer"
import { AppHeader } from "./cmp/app-header"

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className="main-container">
        <ProductsCatalogApp />
      </main>
      <AppFooter />
    </div>
  )
}

export default App
