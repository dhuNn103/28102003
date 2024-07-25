import { memo, useState } from "react";
import "./style.scss";
import {
  FaInstagram,
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaTwitter,
  FaRegUser,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdAttachEmail } from "react-icons/md";
import { formatter } from "utils/fomater";
import { ROUTERS } from "utils/router";

const Header = () => {
  const [menus, setMenus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa hàng",
      path: ROUTERS.USER.PRODUCT,
    },
    {
      name: "Sản phẩm",
      path: "",
      isShowSubmenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Rau củ",
          path: "",
        },
        {
          name: "Thức ăn nhanh",
          path: "",
        },
        {
          name: "Trứng",
          path: "",
        },
      ],
    },
    {
      name: "Giới thiệu",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "bài viết",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Liên hệ",
      path: ROUTERS.USER.HOME,
    },
  ]);

  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header_top_left">
              <ul>
                <li>
                  <MdAttachEmail />
                  heloo@gmail.com
                </li>

                <li>freeShip {formatter(300000)}</li>
              </ul>
            </div>
            <div className="col-6 header_top_right">
              <ul>
                <li>
                  <Link to={""}>
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <FaGoogle />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <FaRegUser />
                  </Link>
                  <span>Login</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header_logo">
              <h1>HeaHaoi</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <nav className="header_menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                  </li>
                ))}

                {/* <li>Giới thiệu</li>
                <li>
                  <ul>
                    <li>Thịt</li>
                    <li>Thịt</li>
                    <li>Thịt</li>
                  </ul>
                </li>
                <li>Liên hệ</li> */}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3">
            <div className="header_cart">
              <div className="header_cart_price">
                <span>{formatter(10)}</span>
              </div>
              <ul>
                <li>
                  <Link to={"#"}>
                    <FaShoppingCart />
                    <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
