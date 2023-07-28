import React from "react";
import style from "./Style.NavBar.module.scss";
import cartIcon from "../../assets/icons/cart.svg";
import profileIcon from "../../assets/icons/profile.svg";
import searchIcon from "../../assets/icons/magnifying-glass.svg";
import homeIcon from "../../assets/icons/home.svg";
import downIcon from "../../assets/icons/down-chevron.svg";

const NavBarComponent = () => {
    return(<>
        <div className={style.main}>
            <div className={style.topSection}>
                <div className={style.logo}></div>
                <div className={style.searchBarArea}><input className={style.searchBar} placeholder="Search Keyword or Phrase"></input><img src={searchIcon} className={style.searchIcon} /></div>
                <div className={style.searchBarWidgets}>
                    <div className={style.navCartIcon}><img src={cartIcon}/></div><div id="nav_cart_items" className={style.cartItems}>23</div>
                    <div className={style.navProfileIcon}><img src={profileIcon}/></div>
                </div>
            </div>
            <div className={style.bottomSection}>
                <div className={[style.navTab, style.navHome].join(' ')}><img src={homeIcon} /></div>
                <div className={[style.navTab, style.catagory].join(' ')}>Rifles<img src={downIcon} /></div>
                <div className={[style.navTab, style.catagory].join(' ')}>Pistols<img src={downIcon} /></div>
                <div className={[style.navTab, style.catagory].join(' ')}>Shotguns<img src={downIcon} /></div>
                <div className={[style.navTab, style.catagory].join(' ')}>Revolvers<img src={downIcon} /></div>
                <div className={[style.navTab, style.catagory].join(' ')}>Full Auto<img src={downIcon} /></div>
                <div className={[style.navTab, style.catagory].join(' ')}>Semi-Auto<img src={downIcon} /></div>
                <div className={[style.navTab, style.catagory].join(' ')}>Special Action<img src={downIcon} /></div>
                <div className={[style.navTab, style.catagory].join(' ')}>Attachments<img src={downIcon} /></div>
                <div className={[style.navTab, style.catagory].join(' ')}>Ammunition<img src={downIcon} /></div>


            </div>
        </div>
    </>)
}

export default NavBarComponent;