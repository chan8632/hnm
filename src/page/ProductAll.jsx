import { useEffect, useState } from "react";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProduct = async () => {
    const url = "http://localhost:5000/products";
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <img src="https://noona-hnm.netlify.app/track-jacket.jpeg" />
      <div>Conscious choice</div>
      <div>아플리케 트랙 재킷</div>
      <div>₩99900</div>
      <div>신제품</div>
    </div>
  );
};

export default ProductAll;
