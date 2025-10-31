import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`product/${item?.id}`);
  };
  const buttonClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div className="product-card" onClick={showDetail}>
      <div className="image-container">
        <img src={`${item?.img}`} />

        <DropdownButton
          as={ButtonGroup}
          drop={"up"}
          onClick={buttonClick}
          className="button-image"
        >
          {item?.choice === true && (
            <Dropdown.Item eventKey="1">Conscious choice</Dropdown.Item>
          )}
          {item?.new === true && (
            <Dropdown.Item eventKey="2">신제품</Dropdown.Item>
          )}
        </DropdownButton>
      </div>
      <div></div>
      <div>{item?.title}</div>
      <div>{`₩ ${item?.price}`}</div>
      <div></div>
    </div>
  );
};

export default ProductCard;
