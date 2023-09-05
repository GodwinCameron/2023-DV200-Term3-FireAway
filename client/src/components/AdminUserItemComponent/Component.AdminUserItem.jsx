import React, { useState } from "react";
import style from "./Style.AdminUserItem.module.scss";
import checkButton from "../../assets/icons/tick.svg";
import axios from "axios";

const AdminUserItem = (props) => {
    const data = props.user;
    const userId = data._id;
  var formattedPrice = parseInt(data.wallet).toLocaleString();
  const [isEditing, setIsEditing] = useState(false);
  const [changingPass, setChangingPass] = useState(false);
  const expand = () => {
    setIsEditing(!isEditing);
  };
  const changePass = () => {
    setChangingPass(!changingPass);
  };
  const updatePass = (e) => {
    e.preventDefault();
    axios.put("http://localhost:5000/api/user/"+userId+"/", {
        password: document.getElementById("password").value,
        })
    setChangingPass(!changingPass);
    props.setUpdate(!props.update);
  };

  const password = data.password;
  const asteriskString = "*".repeat(password.length);

  return (
    <>
      {!isEditing && (
        <div onClick={expand} className={style.main}>
          <p className={style.col}>{data.name}</p>
          <p className={style.col}>{data.surname}</p>
          <p className={style.col} >wallet:R{formattedPrice}.00</p>
        </div>
      )}
      {isEditing && (
        <div className={style.mainExpanded}>
          <p>
            First Name: <span>{data.name}</span>
          </p>
          <p>
            Last Name: <span>{data.surname}</span>
          </p>
          <p>
            Username: <span>{data.username}</span>
          </p>
          <p>
            e-mail: <span>{data.email}</span>
          </p>
          <div className={style.userField}>
            {changingPass === true ? (
              <form onSubmit={updatePass} className={style.form}>
                <input
                  id="password"
                  type="text"
                  placeholder={password}
                  defaultValue={password}
                />
                <button className={style.button}>
                  <img src={checkButton} />
                </button>
              </form>
            ) : (
              <p>
                Password: <span>{asteriskString}</span>
              </p>
            )}
            <div
              onClick={changePass}
              className={[style.changePass, style.userBtn].join(" ")}
            >
              Change Password
            </div>
          </div>
          <p>wallet:R{formattedPrice}.00</p>

          <div className={[style.changeAdmin, style.userBtn].join(" ")}>
            Super user
          </div>
          <div className={[style.delete, style.userBtn].join(" ")}>Delete</div>
          <div
            onClick={expand}
            className={[style.done, style.userBtn].join(" ")}
          >
            Done
          </div>
        </div>
      )}
    </>
  );
};

export default AdminUserItem;
