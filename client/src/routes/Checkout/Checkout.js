import React, { useEffect, useState } from "react";
import style from "./Style.Checkout-Route.module.scss";
import FooterComponent from "../../components/FooterComponent/Component.Footer";
import CheckoutImage from "../../assets/images/yay.png";
import NavBarMinComponent from "../../components/NavBarMinComponent/Component.NavBarMin";

const Checkout = (props) => {
  const admin = props.admin;
  const user = props.user;

  const singOut = () => {
    window.location.href = "/login";
  };

  const GoToHome = () => {
    window.location.href = "/";
  };


  return (
    <>
      <NavBarMinComponent admin={admin} user={user} />
      <div className={style.main}>
        <div className={style.CheckoutImage}>
          <img src={CheckoutImage} />
          <h1>Order Complete!</h1>
          <h2>Thank you for shopping with us!</h2>
          <p>
            Please wait while we authorise your order, if you have any queries
            about the order or any other matters, don't hesitate to{" "}
            <span>contact us!</span>
          </p>
          <br />
          <div className={style.backText}>
            <h3 onClick={GoToHome} >
              Continue Shopping<span>&#10161;</span>
            </h3>
            <p className={style.align}>Or...</p>
            <h3 onClick={singOut} className={style.signOut}>
              Signout
            </h3>
          </div>
        </div>
      </div>
      {/* <FooterComponent /> */}
    </>
  );
};

export default Checkout;
