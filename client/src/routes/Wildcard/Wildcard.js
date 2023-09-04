import React, { useEffect, useState } from "react";
import style from "./Style.Wildcard-Route.module.scss";
import FooterComponent from "../../components/FooterComponent/Component.Footer";
import wildcardImage from "../../assets/images/wildcard.png";

const Wildcard = (props) => {
  const admin = props.admin;
  const user = props.user;


  const GoBack = () => {
    window.location.href = "/";
  }



  return (
    <>
      <div className={style.main}>
        <div className={style.wildcardImage}>
          <img src={wildcardImage}/>
          <h1>Sorry!</h1>
          <h2>We couldn't find what you're looking for...</h2>
          <p>Try navigating back to the main site, if this issue persists please <span>contact us!</span></p>
          <br/>
          <div className={style.backText}>
          <h3 onClick={GoBack}>Back to Home page<span className={style.backArrow}>&#10161;</span></h3>
          </div>
          </div>
      </div>
      {/* <FooterComponent /> */}
    </>
  );
};

export default Wildcard;
