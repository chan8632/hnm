import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
        <Col>
          <img src={item?.img} />
        </Col>
        <Col className="itemInfo">
          {/* 정보글 및 추가 버튼 */}
          <div>{item?.title}</div>
          <div>₩ 99900</div>
          <div>Conscious choice</div>
          <select className="detail-select">
            <option>s</option>
            <option>m</option>
            <option>l</option>
          </select>
          <button>추가</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
