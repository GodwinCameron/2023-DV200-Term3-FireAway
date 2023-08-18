import React from "react";
import style from "./Style.ProductCard.module.scss";
import cartIcon from "../../assets/icons/cart.svg";
import heartIcon from "../../assets/icons/heart.svg";
import listIcon from "../../assets/icons/list.svg";
import { Link } from "react-router-dom";

const ProductCardComponent = (props) => {
  // console.log(props.product);

  var formattedPrice = parseInt(36000).toLocaleString();

  return (
    <Link className={style.noTextDec} to="/product">
      <div className={style.main}>
        <div className={style.image}></div>
        <div className={style.productTitle}>
          {props.productData.make} {props.productData.model}{" "}
          {props.productData.frame !== " "
            ? " - " + props.productData.frame
            : ""}
        </div>
        <div className={style.productPrice}>
          R<span id="numberDisplay">{formattedPrice}.00</span>
        </div>
        <div className={style.productDescription}>
          Good gun, yes go buy now! go pew pew, yes yes nice!
        </div>
        <div className={style.buttonArea}>
          <div className={[style.button, style.cartBtn].join(" ")}>
            <img alt="" src={cartIcon} />
          </div>
          <div className={[style.button, style.heartBtn].join(" ")}>
            <img alt="" src={heartIcon} />
          </div>
          <div className={[style.button, style.compareBtn].join(" ")}>
            <img alt="" src={listIcon} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCardComponent;

// TODO: Fix styling of text and prices
// TODO: Add trunkated description on items.
