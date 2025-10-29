import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./page/LoginPage";
import ProductDetail from "./page/ProductDetail";
import ProductAll from "./page/ProductAll";
import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
