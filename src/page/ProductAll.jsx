import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setquery] = useSearchParams();
  const searchQuery = query.get("q") || "";
  const getProduct = async () => {
    const url = `https://my-json-server.typicode.com/chan8632/hnmserver/products/?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProduct();
  }, [query]);

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
