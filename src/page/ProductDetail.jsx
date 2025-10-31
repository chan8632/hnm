import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const getProductDeatil = async () => {
    const url = `https://my-json-server.typicode.com/chan8632/hnmserver/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setItem(data);
  };
  useEffect(() => {
    getProductDeatil();
  }, []);
  return (
    <Container style={{ marginTop: "50px" }}>
      {/* 사진 */}
      <Row>
        <Col md={6} sm={12}>
          <img src={item?.img} />
        </Col>
        <Col md={6} sm={12} className="itemInfo">
          {/* 정보글 및 추가 버튼 */}
          <div>{item?.title}</div>
          <div>₩ 99900</div>
          <div>Conscious choice</div>
          <select className="detail-select">
            <option>s</option>
            <option>m</option>
            <option>l</option>
          </select>
          <Button variant="dark">추가</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
