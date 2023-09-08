import React from "react";
import style from "./Style.Footer.module.scss";
import logo from "../../assets/fireaway-logo-white.svg";
import phone from "../../assets/icons/phone.svg";
import phoneOrange from "../../assets/icons/phone-orange.svg";
import mail from "../../assets/icons/mail.svg";
import mailOrange from "../../assets/icons/mail-orange.svg";
import delivery from "../../assets/icons/delivery-orange.svg";
import undo from "../../assets/icons/undo.svg";
import repo from "../../assets/icons/repo.svg";


const FooterComponent = () => {
  let email_href =
    "https://mail.google.com/mail/?view=cm&fs=1&to=200109@virtualwindow.co.za&su=FireAway+Query&body=Good+day,+Cameron!+Please+assist+me+regarding+the+'FireAway'+Store.";
  return (
    <>
      <div className={style.main}>
        <div className={style.contact}>
          <a className={style.width} href="tel:+27825006874" target="_blank">
            <div className={style.block}>
              <img className={style.image} src={phone} />
              <div className={style.text}>
                <h2 className={style.title}>+27 82 500 6874</h2>
                <p>Call us between the working hours of 8AM and 5PM.</p>
              </div>
            </div>
          </a>
          <a className={style.width} href={email_href} target="_blank">
            <div className={style.block}>
              <img className={style.image} src={mail} />
              <div className={style.text}>
                <h2 className={style.title}>200109@virtualwindow.co.za</h2>
                <p>E-mail us at any time of the day!</p>
              </div>
            </div>
          </a>
          <a
            className={style.width}
            href="https://github.com/GodwinCameron/2023-DV200-Term3-FireAway"
            target="_blank"
          >
            <div className={style.block}>
              <img
                className={style.image}
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              />
              <div className={style.text}>
                <h2 className={style.title}>FireAway! Repository</h2>
                <p>
                  Check out the GitHub repo for FireAway! - Or get in touch with
                  us on GitHub.
                </p>
              </div>
            </div>
          </a>
          <a
            className={style.width}
            href="https://www.openwindow.co.za/interactive-development/"
            target="_blank"
          >
            <div className={style.block}>
              <img
                className={style.image}
                src="https://www.openwindow.co.za/wp-content/uploads/2023/05/OW-Logo-Black-on-White-01.png"
              />
              <div className={style.text}>
                <h2 className={style.title}>
                  Open Window - Interactive Development
                </h2>
                <p>
                  Check out my university! I'm currently a 2nd year Interactive
                  Development student!
                </p>
              </div>
            </div>
          </a>
          <a
            className={style.width}
            href="https://www.mongodb.com/mern-stack"
            target="_blank"
          >
            <div className={style.block}>
              <img
                className={style.image}
                src="https://cdn.icon-icons.com/icons2/3913/PNG/512/mongodb_logo_icon_248434.png"
              />
              <div className={style.text}>
                <h2 className={style.title}>MERN Stack - Techonologies</h2>
                <p>Check out the MERN Stack used to develop this project!</p>
              </div>
            </div>
          </a>
        </div>
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
          <div className={[style.section, style.last].join(' ')}>
            <h2 className={style.title}>Sign up for our newsletter!</h2>
            <input className={style.input} placeholder="E-mail"></input>
            <input className={style.input} placeholder="Phone number"></input>
            <button className={style.button}>Sign up!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
