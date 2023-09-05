import React from "react";
import style from "./Style.NavBar.module.scss";
import adminIcon from "../../assets/icons/admin.svg";
import cartIcon from "../../assets/icons/cart.svg";
import profileIcon from "../../assets/icons/profile.svg";
import loginIcon from "../../assets/icons/log.svg";
import searchIcon from "../../assets/icons/magnifying-glass.svg";
import homeIcon from "../../assets/icons/home.svg";
import downIcon from "../../assets/icons/down-chevron.svg";
import FAlogo from "../../assets/fireaway-logo.svg";
import { Link } from "react-router-dom";

const NavBarComponent = (props) => {

  return (
    <>
      <div className={style.main}>
        <div className={style.topSection}>
          <div className={style.logo}>
            <img alt="" src={FAlogo} />
          </div>
          <div className={style.searchBarArea}>
            <input
              className={style.searchBar}
              placeholder="Search Keyword or Phrase"
            ></input>
            <img alt="" src={searchIcon} className={style.searchIcon} />
          </div>
          <div className={style.searchBarWidgets}>
            {props.admin && (
              <Link to="/admin">
                <div className={style.navAdminIcon}>
                  <img alt="" src={adminIcon} />
                </div>
              </Link>
            )}
            {props.user || props.admin ? (
              <>
              <Link to="/cart">
                <div className={style.navCartIcon}>
                  <img alt="" src={cartIcon} />
                </div>
              </Link>
                <div id="nav_cart_items" className={style.cartItems}>
                  23
                </div>
              </>
            ) : null}
            {props.user || props.admin ? (
              <Link to="/login">
                <div className={style.navProfileIcon}>
                  <img className={style.loginIcon} alt="" src={profileIcon} />
                </div>
              </Link>
            ) : (
              <Link to="/login">
                <div className={style.navProfileIcon}>
                  <img className={style.loginIcon} alt="" src={loginIcon} />
                </div>
              </Link>
            )}
          </div>
        </div>
        <div className={style.bottomSection}>
          <Link to="/">
            <div className={[style.navTab, style.navHome].join(" ")}>
              <img alt="" src={homeIcon} />
            </div>
          </Link>
          <Link to="/rifles">
            <div className={[style.navTab, style.catagory].join(" ")}>
              Rifles
              <img alt="" src={downIcon} />
            </div>
          </Link>
          <Link to="/pistols">
            <div className={[style.navTab, style.catagory].join(" ")}>
              Pistols
              <img alt="" src={downIcon} />
            </div>
          </Link>
          <Link to="/shotguns">
            <div className={[style.navTab, style.catagory].join(" ")}>
              Shotguns
              <img alt="" src={downIcon} />
            </div>
          </Link>
          <div className={[style.navTab, style.catagory].join(" ")}>
            Revolvers
            <img alt="" src={downIcon} />
          </div>
          <div className={[style.navTab, style.catagory].join(" ")}>
            Full Auto
            <img alt="" src={downIcon} />
          </div>
          <div className={[style.navTab, style.catagory].join(" ")}>
            Semi-Auto
            <img alt="" src={downIcon} />
          </div>
          <div className={[style.navTab, style.catagory].join(" ")}>
            Special Action
            <img alt="" src={downIcon} />
          </div>
          <div className={[style.navTab, style.catagory].join(" ")}>
            Attachments
            <img alt="" src={downIcon} />
          </div>
          <div className={[style.navTab, style.catagory].join(" ")}>
            Ammunition
            <img alt="" src={downIcon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarComponent;
