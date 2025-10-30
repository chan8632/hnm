import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductCard from "../components/ProductCard";
const ProductAll = ({productList}) => {
  

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
