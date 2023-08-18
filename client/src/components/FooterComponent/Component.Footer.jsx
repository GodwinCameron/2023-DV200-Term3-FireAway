import React from "react";
import style from "./Style.Footer.module.scss";
import logo from "../../assets/fireaway-logo.svg";

const FooterComponent = () => {
    return(<>
        <div className={style.main}>
            <div className={style.logo}><img alt="" src={logo}/></div>
        </div>
    </>)
}

export default FooterComponent;