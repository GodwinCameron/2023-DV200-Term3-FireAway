import React from "react";
import style from "./Style.ImageMenu.module.scss";
import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";
import image4 from "../../assets/images/4.png";
import image5 from "../../assets/images/5.png";
import image6 from "../../assets/images/6.png";
import image7 from "../../assets/images/7.png";
import image8 from "../../assets/images/8.png";

const ImageMenu = () => {
    return(<>
        <div className={style.main}>
            <div className={style.topRow}>
                <div className={style.imageBlock}><img alt="" src={image1}/></div>
                <div className={style.imageBlock}><img alt="" src={image2}/></div>
                <div className={style.imageBlock}><img alt="" src={image3}/></div>
                <div className={style.imageBlock}><img alt="" src={image4}/></div>

            </div>
            <div className={style.bottomRow}>
                <div className={style.imageBlock}><img alt="" src={image5}/></div>
                <div className={style.imageBlock}><img alt="" src={image6}/></div>
                <div className={style.imageBlock}><img alt="" src={image7}/></div>
                <div className={style.imageBlock}><img alt="" src={image8}/></div>
            </div>
        </div>
    </>)
}

export default ImageMenu;