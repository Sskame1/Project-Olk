import { Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import HomePage from "./pages/HomePage/HomePage";
import './style/index.css'
import AfishaPage from "./pages/AfishaPage/AfishaPage";
import AfishaPageId from "./pages/AfishaPage/AfishaPageId";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/Afisha" element={<AfishaPage />} />
          <Route path="/Afisha/id" element={<AfishaPageId />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
