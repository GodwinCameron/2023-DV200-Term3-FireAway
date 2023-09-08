import React, { useEffect, useState } from "react";
import style from "./Style.CartItem.module.scss";
import testImage from "../../assets/images/ar.png";
import deleteIcon from "../../assets/icons/delete.svg";

const CartItemComponent = (props) => {
  let productData = props.productData;
  const [isExpanded, setIsExpanded] = useState(false);
  const [divStyle, setDivStyle] = useState({});
  const [product, setProduct] = useState({});

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);

    const newStyle = {
      height: isExpanded ? "4vh" : "14vh",
      fontSize: isExpanded ? "12px" : "16px",
      cursor: isExpanded ? "zoom-in" : "zoom-out",
    };
    setDivStyle(newStyle);
  };

  useEffect(() => {
    fetch(
      "http://localhost:5000/api/" + productData.type + "/" + productData.id
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        if (data.price) {
          props.setCartTotal((prev) => prev + data.price * productData.quant);
        }
      });
  }, []);

  let formattedPrice = parseInt(product.price).toLocaleString();

  const removeFromCart = (event) => {
    event.stopPropagation();
    // props.setCartTotal((prev) => prev - product.price * productData.quant);
    console.log("removing from cart");
    const cartData = localStorage.getItem("cart");
    const cartDataParsed = JSON.parse(cartData);
    const removeIndex = cartDataParsed.findIndex(
      (item) => item.id === productData.id
    );
    cartDataParsed.splice(removeIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cartDataParsed));
    console.log(cartDataParsed);
    window.location.reload();
  };

  return (
    <div onClick={toggleExpand} style={divStyle} className={style.main}>
      <div style={divStyle} className={style.content}>
        <div className={style.productIcon}>
          <img src={product.image} />
        </div>
        <div className={style.field}>
          <p>{product.make} -</p>
        </div>
        <div className={style.field}>
          <p>{product.model} -</p>
        </div>
        {isExpanded && (
          <>
            <div className={style.field}>
              <p>{product.calibre} -</p>
            </div>
            <div className={style.field}>
              <p>{product.frame} </p>
            </div>
          </>
        )}

        <div className={style.price}>
          <p>
            Cost: R{formattedPrice}.00 x {productData.quant}
          </p>
        </div>
      </div>
      <div className={style.buttons}>
        <div onClick={removeFromCart} className={style.button}>
          <img src={deleteIcon} />
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;
