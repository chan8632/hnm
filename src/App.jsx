import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./page/LoginPage";
import ProductDetail from "./page/ProductDetail";
import ProductAll from "./page/ProductAll";
import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  const [authenticate, setAuthenticate] = useState(false); //true면 로그인 됨. false면 로그인 안됨
  useEffect(() => {
    console.log("aa", authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<LoginPage setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={authenticate ? <ProductDetail /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
