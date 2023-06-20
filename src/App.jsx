import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Character } from "./pages/Character"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App