import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
library.add(fas, far, fab);

const ProductCard = ({ item,  }) => {
  const [isMark, setIsMark] = useState(false);
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`product/${item?.id}`);
  };
  const buttonClick = (event) => {
    event.stopPropagation();
  };
  const changeIcon = () => {
    setIsMark((prev) => !prev);
  };
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={`${item?.img}`} onClick={showDetail} />

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
      <div>
        <div>
          <div>{item?.title}</div>
          <div>{`₩ ${item?.price}`}</div>
        </div>
        <div onClick={changeIcon} className="bookmark">
          {isMark ? (
            <FontAwesomeIcon icon="fa-solid fa-bookmark" />
          ) : (
            <FontAwesomeIcon icon="fa-regular fa-bookmark" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
