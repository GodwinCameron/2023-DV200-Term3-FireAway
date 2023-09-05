import React, { useState } from "react";
import style from "./Style.CartItem.module.scss";
import testImage from "../../assets/images/ar.png";

const CartItemComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [divStyle, setDivStyle] = useState({});

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);

    const newStyle = {
      height: isExpanded ? "4vh" : "12vh",
      fontSize: isExpanded ? "12px" : "16px",
      cursor: isExpanded ? "zoom-in" : "zoom-out",
    };
    setDivStyle(newStyle);
  };

  return (
    <div onClick={toggleExpand} style={divStyle} className={style.main}>
      <div className={style.productIcon}>
        <img src={testImage} />
      </div>
      <div className={style.field}>
        <p>Barret -</p>
      </div>
      <div className={style.field}>
        <p>M82A1 -</p>
      </div>
      {isExpanded && (
        <>
          <div className={style.field}>
            <p>.50cal -</p>
          </div>
          <div className={style.field}>
            <p>tan </p>
          </div>
        </>
      )}

      <div className={style.price}>
        <p>Cost: R129,000.59</p>
      </div>
    </div>
  );
};

export default CartItemComponent;
