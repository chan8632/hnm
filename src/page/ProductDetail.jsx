import { Col, Container, Row } from "react-bootstrap";

const ProductDetail = () => {
  return (
    <Container style={{ marginTop: "50px" }}>
      {/* 사진 */}
      <Row>
        <Col>
          <img src="https://noona-hnm.netlify.app/track-jacket.jpeg" />
        </Col>
        <Col className="itemInfo">
          {/* 정보글 및 추가 버튼 */}
          <div>아플리케 트랙 재킷</div>
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
