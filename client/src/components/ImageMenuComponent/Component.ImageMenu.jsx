import React from "react";
import style from "./Style.ImageMenu.module.scss";
import testImage from "../../assets/images/testImage.jpg";

const ImageMenu = () => {
    return(<>
        <div className={style.main}>
            <div className={style.topRow}>
                <div className={style.imageBlock}><img src={testImage}/></div>
                <div className={style.imageBlock}><img src={testImage}/></div>
                <div className={style.imageBlock}><img src={testImage}/></div>
                <div className={style.imageBlock}><img src={testImage}/></div>

            </div>
            <div className={style.bottomRow}>
                <div className={style.imageBlock}><img src={testImage}/></div>
                <div className={style.imageBlock}><img src={testImage}/></div>
                <div className={style.imageBlock}><img src={testImage}/></div>
                <div className={style.imageBlock}><img src={testImage}/></div>
            </div>
        </div>
    </>)
}

export default ImageMenu;