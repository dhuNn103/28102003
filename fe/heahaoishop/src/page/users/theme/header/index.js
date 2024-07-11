import { memo } from "react";
import "./style.scss";
import {
  FaInstagram,
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaTwitter,
  FaRegUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdAttachEmail } from "react-icons/md";
import { formatter } from "utils/fomater";

const Header = () => {
  return (
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
  );
};

export default memo(Header);
