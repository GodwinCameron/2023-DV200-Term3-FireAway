import React from "react";
import style from "./Style.SecondaryNav.module.scss";
import opticsIcon from "../../assets/icons/optic.svg";
import ammoIcon from "../../assets/icons/ammo.svg";
import attachmentIcon from "../../assets/icons/attachment.png";
import magIcon from "../../assets/icons/mag.png";
import pistolIcon from "../../assets/icons/pistol.png";
import rifleIcon from "../../assets/icons/rifle.png";
import revolverIcon from "../../assets/icons/revolver.png";
import shotgunIcon from "../../assets/icons/shotgun.png";
import raygunIcon from "../../assets/icons/raygun.png";



const SecondaryNav = () => {
    return(<>
        <div className={style.main}>
            <p>Looking for something specific?</p>
            <div className={style.barHolder}>
                <div className={style.tab}><div className={style.imgHolder}><img src={opticsIcon}/></div><h4>OPTICS</h4></div>
                <div className={style.tab}><div className={style.imgHolder}><img src={ammoIcon}/></div><h4>AMMO</h4></div>
                <div className={style.tab}><div className={style.imgHolder}><img src={attachmentIcon}/></div><h4>ATTACHMENTS</h4></div>
                <div className={style.tab}><div className={style.imgHolder}><img src={magIcon}/></div><h4>MAGS</h4></div>
                <div className={style.tab}><div className={style.imgHolder}><img src={pistolIcon}/></div><h4>PISTOLS</h4></div>
                <div className={style.tab}><div className={style.imgHolder}><img src={rifleIcon}/></div><h4>RIFLES</h4></div>
                <div className={style.tab}><div className={style.imgHolder}><img src={revolverIcon}/></div><h4>RIFLES</h4></div>
                <div className={style.tab}><div className={style.imgHolder}><img src={shotgunIcon}/></div><h4>RIFLES</h4></div>
                <div className={[style.tab, style.lastTab].join(" ")}><div className={style.imgHolder}><img src={raygunIcon}/></div><h4>SPECIAL ACTION</h4></div>
            </div>
        </div>
    </>)
}

export default SecondaryNav;