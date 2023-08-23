import React from "react";
import style from "./Style.AdminHeader.module.scss";

const AdminHeader = (props) => {

    const user = props.user;
  
    const closePopup = () => {
    document.getElementsByClassName(style.main)[0].style.height = "1px";
    setTimeout(() => {
        document.getElementsByClassName(style.main)[0].style.display = "none";
    }, 250);
    }
  
  return (
    <>
      <div className={style.main}>
        <p className={style.test}>
          Welcome {user.name}! This message is here to inform you that your
          current session has Admin rights and super user capabilities, should
          your session expire, be sure to log in onto this -or another Admin-
          account to regain super user functionality.
        </p>
        <div className={style.align} onClick={closePopup}>
          <h2>&#10006;</h2>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
