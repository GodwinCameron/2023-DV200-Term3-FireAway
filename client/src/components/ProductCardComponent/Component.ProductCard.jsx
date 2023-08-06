import React from "react";
import style from "./Style.ProductCard.module.scss";

const ProductCardComponent = () => {
    return(<>
        <div className={style.main}>
            <div className={style.image}></div>
            <div className={style.productTitle}>Assault Rifle</div>
            <div className={style.productPrice}>R36 750</div>
            <div className={style.productDescription}>Good gun, yes go buy now! go pew pew, yes yes nice!</div>
            <div className={style.buttonArea}>
                <div className={style.button}></div>
                <div className={style.button}></div>
                <div className={style.button}></div>
            </div>
        </div>
    </>)
}

export default ProductCardComponent;

// TODO: Fix styling of text and prices
// TODO: Add trunkated description on items.