import React, { useEffect, useState } from "react";
import style from "./Style.AdminUsers.module.scss";
import axios from "axios";
import AdminUserItem from "../AdminUserItemComponent/Component.AdminUserItem";

const AdminUsers = () => {
  const [divStyle, setDivStyle] = useState({});
  const [users, setUsers] = React.useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getUsers")
      .then((res) => {
        setUsers(res.data);
        setUpdate(false);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }, [update]);

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
          {users.map((user) => {
            return <AdminUserItem update={update} setUpdate={setUpdate} user={user} />;
          })}
        </div>
        <h3 className={style.align} onClick={collapse}>
          Done -
        </h3>
      </div>
    </>
  );
};

export default AdminUsers;
