import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="footer_about">
              <h1 className="footer_about_logo">Haohai</h1>
              <ul>
                <li>Đại chỉ: 48 Xóm Đình Ninh Môn</li>
                <li>Phone: 037-510-4957</li>
                <li>Email: daovanhung@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="footer_widget">
              <h6>Cửa hàng</h6>
              <ul>
                <li>
                  <Link to={""}>Liên hệ </Link>
                </li>
                <li>
                  <Link to={""}>Thông tin chung</Link>
                </li>
                <li>
                  <Link to={""}>Sản phẩm</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={""}>Giỏ hàng</Link>
                </li>
                <li>
                  <Link to={""}>Danh sách sản phẩm</Link>
                </li>
                <li>
                  <Link to={""}>Giới thiệu</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="footer_widget">
              <h4>Khuyến mãi & ưu đãi</h4>
              <p>Đăng ký tại đây</p>
              <form action="#">
                <div className="input-group">
                  <input type="text" placeholder="Nhập Email" />
                  <button type="submit" className="button-submit">
                    Đăng ký
                  </button>
                </div>
                <div className="footer_widget_social">
                  <div>
                    <FaFacebookF />
                  </div>
                  <div>
                    <FaInstagram />
                  </div>
                  <div>
                    <FaLinkedinIn />
                  </div>
                  <div>
                    <FaGoogle />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
