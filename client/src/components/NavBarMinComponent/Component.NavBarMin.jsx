import React from "react";
import style from "./Style.NavBarMin.module.scss";
import adminIcon from "../../assets/icons/admin.svg";
import cartIcon from "../../assets/icons/cart.svg";
import profileIcon from "../../assets/icons/profile.svg";
import loginIcon from "../../assets/icons/log.svg";
import logoutIcon from "../../assets/icons/logout.svg";
import searchIcon from "../../assets/icons/magnifying-glass.svg";
import homeIcon from "../../assets/icons/home.svg";
import downIcon from "../../assets/icons/down-chevron.svg";
import FAlogo from "../../assets/fireaway-logo.svg";
import { Link } from "react-router-dom";

const NavBarMinComponent = (props) => {
  return (
    <>
      <div className={style.main}>
        <div className={style.topSection}>
          <div className={style.logo}>
            <Link to="/">
              <img alt="" src={FAlogo} />
            </Link>
          </div>
          <div className={style.searchBarWidgets}>
            {props.admin && (
              <Link to="/admin">
                <div className={style.navAdminIcon}>
                  <img alt="" src={adminIcon} />
                </div>
              </Link>
            )}
          </div>
        </div>
        <div className={style.bottomSection}>
          <Link to="/">
            <div className={[style.navTab, style.catagory].join(" ")}>
              Home
              <img alt="" className={style.minHome} src={homeIcon} />
            </div>
          </Link>
          <Link to="/rifles">
            <div className={[style.navTab, style.catagory].join(" ")}>
              Products
              <img alt="" src={downIcon} />
            </div>
          </Link>
          <Link to="/profile">
            <div className={[style.navTab, style.catagory].join(" ")}>
              Profile
              <img alt="" src={downIcon} />
            </div>
          </Link>
          <Link to="/cart">
            <div className={[style.navTab, style.catagory].join(" ")}>
              cart
              <img alt="" src={downIcon} />
            </div>
          </Link>
          <Link to="/login">
            <div className={[style.navTab, style.catagory].join(" ")}>
              logout
              <img alt="" className={style.minLog} src={logoutIcon} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBarMinComponent;
