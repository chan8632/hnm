import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProduct = async () => {
    const url = "http://localhost:5000/products";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setProductList(data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <Container>
      <Row>
        {productList?.map((item, idx) => (
          <Col lg={3} key={idx}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
