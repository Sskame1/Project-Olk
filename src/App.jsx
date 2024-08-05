import { Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import HomePage from "./pages/HomePage/HomePage";
import './style/index.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
