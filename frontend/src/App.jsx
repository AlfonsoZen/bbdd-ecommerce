import Nav from "./components/Nav/Nav.component"
import Main from "./components/Main/Main.component"
import ProductsContainer from "./components/ProductsContainer/ProductsContainer.component"

import "./index.css"

const App = () => {
  return (
    <div className="bg-[#E7ECEF]">
      {/* <header>
        <Nav />
        <Main />
      </header> */}
      <section id="products-section">
        <ProductsContainer />
      </section>
    </div>
    )
}

export default App
