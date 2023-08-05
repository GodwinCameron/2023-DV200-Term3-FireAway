import React from "react";
import style from "./Style.SecondaryNav.module.scss";

const SecondaryNav = () => {
    return(<>
        <div className={style.main}>
            <p>Looking for something specific?</p>
            <div className={style.barHolder}>
                <div className={style.tab}>hi there this is sample text!</div>
                <div className={style.tab}></div>
                <div className={style.tab}></div>
                <div className={style.tab}></div>
                <div className={style.tab}></div>
                <div className={style.tab}></div>

            </div>
        </div>
    </>)
}

export default SecondaryNav;