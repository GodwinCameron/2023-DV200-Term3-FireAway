import React, { useEffect, useState } from "react";
import style from "./Style.Cart-Route.module.scss";
import FooterComponent from "../../components/FooterComponent/Component.Footer";
import CartItemComponent from "../../components/CartItemComponent/Component.CartItem";
import NavBarMinComponent from "../../components/NavBarMinComponent/Component.NavBarMin";
import axios from "axios";

const Cart = (props) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [formattedCartTotal, setFormattedCartTotal] = useState();
  const admin = props.admin;
  const user = props.user;

  const cartData = localStorage.getItem("cart");
  const cartDataParsed = JSON.parse(cartData);

  useEffect(() => {
    let formattedPrice = parseInt(cartTotal).toLocaleString();
    setFormattedCartTotal(formattedPrice);
  }, [cartTotal]);

  const GoToCheckout = () => {
    const cartData = localStorage.getItem("cart");
    const cartDataParsed = JSON.parse(cartData);
    const orderData = { userId: props.user._id, order: cartDataParsed };
    console.log(orderData);
    axios
      .post("http://localhost:5000/api/order", orderData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    cartDataParsed.forEach((item) => {
      let type = item.type;
      let id = item.id;
      let quant = item.quant;
      let stock = item.currentStock;
      axios
        .put(`http://localhost:5000/api/${type}/${id}`, {
          stock: stock - quant,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    axios
    .put(`http://localhost:5000/api/user/${props.user._id}`, {
      wallet: balance,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
    localStorage.removeItem("cart");
    window.location.href = "/checkout";
  };

  const balance = props.user.wallet - cartTotal;

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
              {cartDataParsed &&
                cartDataParsed.map((cartDataParsed, index) => {
                  return (
                    <CartItemComponent
                      key={index}
                      productData={cartDataParsed}
                      setCartTotal={setCartTotal}
                    />
                  );
                })}

              <div className={style.totalBlock}>
                <div className={style.totalEnd}>
                  <div className={style.totalNumber}>
                    <p>
                      Total: <span>R{formattedCartTotal}.00</span>
                    </p>
                  </div>
                  <p className={style.wallet}>
                      Your Wallet: <span>R{props.user.wallet}.00</span>
                    </p>
                    <p className={style.wallet}>
                      Balance: <span>R{balance}.00</span>
                    </p>
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
