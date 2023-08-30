import React, { useEffect, useState } from "react";
import style from "./Style.ProductCard.module.scss";
import cartIcon from "../../assets/icons/cart.svg";
import heartIcon from "../../assets/icons/heart.svg";
import listIcon from "../../assets/icons/list.svg";
import rifleIcon from "../../assets/icons/rifle.png";
import PistolIcon from "../../assets/icons/pistol.png";
import ShotgunIcon from "../../assets/icons/shotgun.png";
import { Link } from "react-router-dom";

const ProductCardComponent = (props) => {
  const product = props.productData;
  const [divStyle, setDivStyle] = useState({});

  var ProductThumbnail = product.thumbnail;
  if (product.thumbnail === undefined) {
    ProductThumbnail = product.image;
  }
  if (product.capacity !== undefined) {
    if (product.image === undefined || product.image === "") {
      ProductThumbnail = rifleIcon;
    }
    var productType = "rifle";
  } else {
    if (product.calibre === "12 Gauge") {
      if (product.image === undefined) {
        var ProductThumbnail = ShotgunIcon;
      }
      var productType = "shotgun";
    } else {
      if (product.image === undefined) {
        var ProductThumbnail = PistolIcon;
      }
      var productType = "pistol";
    }
  }

  var formattedPrice = parseInt(product.price).toLocaleString();

  return (
    <Link
      className={style.noTextDec}
      to={"/product?id=" + product._id + "&type=" + productType}
    >
      <div className={style.main}>
        <div className={style.image}>
          <img
            className={` ${style.thumbnail} ${
              ProductThumbnail === PistolIcon ? style.pistolThumbnail : ""
            } `}
            src={ProductThumbnail}
          />
        </div>
        <div className={style.productTitle}>
          {props.productData.make} {props.productData.model}{" "}
          {props.productData.frame !== " " ? " - " + product.frame : ""}
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
