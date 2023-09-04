import React from "react";
import style from "./Style.Login-Route.module.scss";
import FooterComponent from "../../components/FooterComponent/Component.Footer";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const LoginRoute = () => {
  sessionStorage.removeItem("JWT");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const registered = queryParams.get("registered");
  const [divStyle, setDivStyle] = useState({});

  const badLogin = () => {
    const styling = {
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      border: "1px solid red",
      color: "red",
    };
    setDivStyle(styling);
  };

  const navigate = useNavigate();

  const ToHome = () => {
    // navigate("/");
    window.location.href = "/";
  };
  const ToRegister = () => {
    navigate("/register");
  };

  const loginHandler = (event) => {
    event.preventDefault();

    if (document.getElementById("username").value === "") {
      document.getElementById("messageText").innerHTML =
        "Please enter a valid username";
      badLogin();
      return;
    } else if (document.getElementById("password").value === "") {
      document.getElementById("messageText").innerHTML =
        "Please enter a password";
      badLogin();
      return;
    } else {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const userInfo = { username, password };
      console.log(userInfo);

      axios
        .post("http://localhost:5000/api/login", userInfo)
        .then((res) => {
          console.log(res);
          sessionStorage.setItem("JWT", res.data.token);
          ToHome();
        })
        .catch((err) => {
          console.log(err);
          document.getElementById("messageText").innerHTML =
            "Invalid username or password";
          badLogin();
        });
    }
  };

  return (
    <>
      <div className={style.main}>
        <h1>Login</h1>
        {registered === "true" ? (
          <div style={divStyle} className={style.message}>
            <p id="messageText">Registration Complete! Please login</p>
          </div>
        ) : (
          <div style={divStyle} className={style.message2}>
            <p id="messageText"></p>
          </div>
        )}
        <form className={style.loginForm} onSubmit={loginHandler}>
          <input
            id="username"
            className={style.input}
            placeholder="Username"
          ></input>
          <input
            type="password"
            id="password"
            className={style.input}
            placeholder="Passowrd"
          ></input>
          <button className={style.button}>Login</button>
        </form>
          <p id="goRegister" className={style.noAcc} onClick={ToRegister}>Don't have an account? <span className={style.reg}>Register here!</span></p>
          <p>Or</p>
          <div onClick={ToHome} className={style.noLogin}>Return home without Login</div>
      </div>
      <FooterComponent />
    </>
  );
};

export default LoginRoute;
