import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home"

const App = () => {
  return (
    <main className="">

      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
        </Routes>

      </Router>
    </main>
  )
}

export default App
