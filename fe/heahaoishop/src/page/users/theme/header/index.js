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
import { CiMenuBurger } from "react-icons/ci";

import { Link } from "react-router-dom";
import { MdAttachEmail } from "react-icons/md";
import { formatter } from "utils/fomater";
import { ROUTERS } from "utils/router";

const Header = () => {
  const [isShowCategories, setShowCategories] = useState(true);

  const [menus] = useState([
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
                    {menu.child && (
                      <ul className="header_menu_dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${menuKey}-${childKey}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
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
      <div className="container">
        <div className="row hero_categories_container">
          <div className="col-lg-3 hero_categories">
            <div
              className="hero_categories_all"
              onClick={() => setShowCategories(!isShowCategories)}
            >
              <CiMenuBurger />
              Danh sách sản phẩm
            </div>
            {isShowCategories && (
              <ul className={isShowCategories ? "" : "hidden"}>
                <li>
                  <Link to={""}>Thịt tươi</Link>
                </li>
                <li>
                  <Link to={""}>Rau tươi</Link>
                </li>
                <li>
                  <Link to={""}>Cá tươi</Link>
                </li>
                <li>
                  <Link to={""}>Quả tươi</Link>
                </li>
                <li>
                  <Link to={""}>Hải sản</Link>
                </li>
                <li>
                  <Link to={""}>Trái cây</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="col-lg-9">Phải</div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
