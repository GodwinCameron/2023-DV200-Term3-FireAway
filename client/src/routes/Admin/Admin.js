import React from "react";
import style from "./Style.Admin-Route.module.scss";
import AdminAdd from "../../components/AdminAddComponent/Component.AdminAdd";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
      <div className={style.main}>
        <div className={style.topBar}>
            <Link to="/" className={style.textDec}><div className={style.backBtn}>&#10094; Back</div></Link>
            
        </div>
        <div className={style.content}>
          <AdminAdd />
        </div>
      </div>
  );
};

export default Admin;
