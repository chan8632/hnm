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
  const [productList, setProductList] = useState([]);
  const [searchData, setSearchData] = useState("");

  const getProduct = async () => {
    const url =
      "https://my-json-server.typicode.com/chan8632/hnmserver/products";
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };
  const dataMatching = async (listData, searchData) => {
    const matchingData = [];
    if (searchData === "") {
      const url =
        "https://my-json-server.typicode.com/chan8632/hnmserver/products";
      const response = await fetch(url);
      const data = await response.json();
      setProductList(data);
      return;
    }
    listData.forEach((item) => {
      if (item.title.match(searchData)) {
        matchingData.push(item);
      }
    });
    setProductList(matchingData);
  };
  useEffect(() => {
    getProduct();
  }, []);
  // useEffect(() => {
  //   console.log("로그인 여부", authenticate);
  // }, [authenticate]);
  useEffect(() => {
    dataMatching(productList, searchData);
    console.log(productList);
  }, [searchData]);
  return (
    <div>
      <Navbar searchData={searchData} setSearchData={setSearchData} />
      <Routes>
        <Route path="/" element={<ProductAll productList={productList} />} />
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
