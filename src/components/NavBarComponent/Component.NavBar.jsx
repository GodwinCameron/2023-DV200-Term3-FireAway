import React from "react";
import style from "./Style.NavBar.module.scss";
import cartIcon from "../../assets/icons/cart.svg";
import profileIcon from "../../assets/icons/profile.svg";

const NavBarComponent = () => {
    return(<>
        <div className={style.main}>
            <div className={style.topSection}>
                <div className={style.logo}></div>
                <div className={style.searchBarArea}><input className={style.searchBar} placeholder="Search Keyword or Phrase"></input></div>
                <div className={style.searchBarWidgets}>
                    <div className={style.navCartIcon}><img src={cartIcon}/></div><div id="nav_cart_items" className={style.cartItems}>23</div>
                    <div className={style.navProfileIcon}><img src={profileIcon}/></div>
                </div>
            </div>
        </div>
    </>)
}

export default NavBarComponent;