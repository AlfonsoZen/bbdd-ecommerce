import Nav from "./components/Nav/Nav.component"
import Main from "./components/Main/Main.component"

import "./index.css"

const App = () => {
  return (
    <div className="bg-[#E7ECEF]">
      <header>
        <Nav />
        <Main />
      </header>
    </div>
    )
}

export default App
