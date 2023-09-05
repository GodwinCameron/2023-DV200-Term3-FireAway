import React, { useState } from "react";
import style from "./Style.AdminUsers.module.scss";
import axios from "axios";

const AdminUsers = () => {
  const [divStyle, setDivStyle] = useState({});

  const expand = () => {
    const expanded = {
      height: "70vh",
    };
    setDivStyle(expanded);
    document.getElementById("users-heading").style.display = "none";
  };

  const collapse = () => {
    const collapsed = {
      height: "3vh",
    };
    setDivStyle(collapsed);
    document.getElementById("users-heading").style.display = "flex";
  };

  return (
    <>
      <div style={divStyle} className={style.main}>
        <h3 id="users-heading" onClick={expand}>
          Users -
        </h3>
        <br />
        <p>Users on the FireAway database:</p>
        <div className={style.table}>
          <p>cam cam wallet:150000</p>
        </div>
        <h3 className={style.align} onClick={collapse}>
          Done -
        </h3>
      </div>
    </>
  );
};

export default AdminUsers;
