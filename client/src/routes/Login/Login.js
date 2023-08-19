import React from "react";
import style from "./Style.Login-Route.module.scss";
import FooterComponent from "../../components/FooterComponent/Component.Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";

const LoginRoute = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const registered = queryParams.get("registered");

    // const loginUser = async (e) => {
  //   try {
  //     const response = await axios.post("/api/auth", userInfo);
  //     const { token } = response.data;

  //     localStorage.setItem("JWT", token);
  //   } catch (error) {
  //     console.error("Authentication Error: ", error);
  //   }
  // };

  // const testUser = () => {
  //   const ActiveJWT = localStorage.getItem("JWT");
  //   console.log("tested user with token: ", ActiveJWT);
  // };

  // const loginHandler = (event) => {
  //   event.preventDefault();
  // call server to login
  //   try {
  //     const response = axios.post("/api/login", {
  //       username: document.getElementById("username").value,
  //       password: document.getElementById("password").value,
  //     });
  //     const { token } = response.data;
  //     localStorage.setItem("JWT", token);
  //   } catch (error) {
  //     console.error("Authentication Error: ", error);
  //   }
  //   console.log(email);
  // };

  const loginHandler = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userInfo = { username, password };
    console.log(userInfo);

    axios.post("http://localhost:5000/api/login", userInfo)
    .then(res => {
      console.log(res);
      localStorage.setItem("JWT", res.data.token);
    })
    .catch(err => {
      console.log(err);
    })
  }


  return (
    <>
      <div className={style.main}>
        <h1>Login</h1>
        {registered === "true" ? (
          <div className={style.message}>
            <p>Registration Complete! Please login</p>
          </div>
        ) : null}
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
      </div>
      <FooterComponent />
    </>
  );
};

export default LoginRoute;
