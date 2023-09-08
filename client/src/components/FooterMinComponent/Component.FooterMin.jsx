import React from "react";
import style from "./Style.FooterMin.module.scss";
import logo from "../../assets/fireaway-logo-white.svg";
import phone from "../../assets/icons/phone.svg";
import phoneOrange from "../../assets/icons/phone-orange.svg";
import mail from "../../assets/icons/mail.svg";
import mailOrange from "../../assets/icons/mail-orange.svg";
import delivery from "../../assets/icons/delivery-orange.svg";
import undo from "../../assets/icons/undo.svg";
import repo from "../../assets/icons/repo.svg";


const FooterMinComponent = () => {
  let email_href =
    "https://mail.google.com/mail/?view=cm&fs=1&to=200109@virtualwindow.co.za&su=FireAway+Query&body=Good+day,+Cameron!+Please+assist+me+regarding+the+'FireAway'+Store.";
  return (
    <>
      <div className={style.main}>
        <div className={style.content}>
          <div className={style.logo}>
            <img className={style.image} src={logo} alt="logo"></img>
          </div>
          <div className={style.section}>
            <p>
              FireAway Store is not liable for anyinjuries or deaths caused by
              the misuse of any of our products.
            </p>
            <br />
            <p>
              Clients are expected to uphold the ussage of their legal
              obligations when operating a firearm purchased from FireAway as
              per their license.
            </p>
          </div>
          <div className={style.section}>
            <p>
              Should you lack the required license for your purchase or firearm
              ussage, feel free to sign up to our <span className={style.span}>Gun Training</span>{" "}
              course. Whereby you will be trained by our professional staff in weapons opperation and safety.
            </p>
          </div>
          <div className={style.section}>
            <div className={style.tag}><img className={style.icons} src={phoneOrange} />+27 82 500 6874.</div>
            <div className={style.tag}><img className={style.icons} src={mailOrange} />200109@virtualwindow.co.za.</div>
            <div className={style.tag}><img className={style.icons} src={delivery} />Free delivery on checkout greater than R50,000.</div>
            <div className={style.tag}><img className={style.icons} src={undo} />Full return and refund period of 48hours.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterMinComponent;
