import React from "react";
import style from "./Style.ProductCard.module.scss";

const ProductCardComponent = () => {

  var formattedNumber = parseInt(36000).toLocaleString();
  

  return (
    <>
      <div className={style.main}>
        <div className={style.image}></div>
        <div className={style.productTitle}>Assault Rifle</div>
        <div className={style.productPrice}>R<span id="numberDisplay">{formattedNumber}.00</span></div>
        <div className={style.productDescription}><span className={style.truncated}>Good gun, yes go buy now! go pew pew, yes yes nice!</span>
          
        </div>
        <div className={style.buttonArea}>
          <div className={style.button}></div>
          <div className={style.button}></div>
          <div className={style.button}></div>
        </div>
      </div>
    </>
  );
};

export default ProductCardComponent;

// TODO: Fix styling of text and prices
// TODO: Add trunkated description on items.
