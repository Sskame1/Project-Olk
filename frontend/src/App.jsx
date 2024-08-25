import { Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import HomePage from "./pages/HomePage/HomePage";
import './style/index.css'
import AfishaPage from "./pages/AfishaPage/AfishaPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/Afisha" element={<AfishaPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
