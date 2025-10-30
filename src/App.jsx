import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./page/LoginPage";
import ProductDetail from "./page/ProductDetail";
import ProductAll from "./page/ProductAll";
import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(true); //true면 로그인 됨. false면 로그인 안됨
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
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
