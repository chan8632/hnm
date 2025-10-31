import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

library.add(fas, far, fab);
const NavBar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "모두 보기",
    "티셔츠",
    "셔츠",
    "피케 | 카라 티셔츠",
    "팬츠",
    "denim",
    "아우터",
  ];
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();

  const search = (event) => {
    if (event.keyCode == 13) {
      const keyword = event.target.value;
      navigate(`/?q=${keyword}`);
      return;
    }
  };

  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <ul className="side-menu-list" id="menu-list">
          {menuList.map((menu, idx) => (
            <li key={idx}>{menu}</li>
          ))}
        </ul>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon
            icon="fa-solid fa-bars"
            onClick={() => setWidth(250)}
          />
        </div>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon="fa-regular fa-user" />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon="fa-regular fa-user" />
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
      </div>

      <div className="nav-logo">
        <img
          width=""
          src="data:image/png;base64,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"
        />
      </div>
      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, idx) => (
            <li key={idx}>{menu}</li>
          ))}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          <input type="text" onKeyDown={search} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
