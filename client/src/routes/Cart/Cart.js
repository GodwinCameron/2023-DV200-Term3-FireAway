import React, { useEffect, useState } from "react";
import style from "./Style.Cart-Route.module.scss";
import FooterComponent from "../../components/FooterComponent/Component.Footer";
import CartItemComponent from "../../components/CartItemComponent/Component.CartItem";
import NavBarMinComponent from "../../components/NavBarMinComponent/Component.NavBarMin";

const Cart = (props) => {
  const [cartTotal, setCartTotal] = useState(0);
  const admin = props.admin;
  const user = props.user;

  const GoToCheckout = () => {
    window.location.href = "/checkout";
  };

  return (
    <>
      <NavBarMinComponent admin={admin} user={user} />
      <div className={style.main}>
        <div className={style.backgroundFilter}>
          <div className={style.cartBox}>
            <div className={style.cartTitleSection}>
              <h1>Your Cart:</h1>
            </div>
            <div className={style.cartContent}>
              <p className={style.textSize}>
                Add or Remove Products from your cart to adjust your order
                before checkout.
              </p>
              <CartItemComponent />
              <CartItemComponent />
              <CartItemComponent />
              <CartItemComponent />
              <div className={style.totalBlock}>
                <div className={style.totalEnd}>
                  <div className={style.totalNumber}>
                    <p>Total:{" "}<span>R1,000.00</span></p>
                  </div>
                  <div onClick={GoToCheckout} className={style.checkoutBtn}>
                    <h2>Checkout</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <FooterComponent /> */}
    </>
  );
};

export default Cart;
