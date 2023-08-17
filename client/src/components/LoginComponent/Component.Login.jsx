import React, { useState } from "react";
import style from "./Style.Login.module.scss";
import axios from "axios";

const LoginComponent = () => {
  const [email, setEmail] = useState('');

  const CreateUser = async (e) => {
    e.preventDefault();

    // For debugging:
    var user = {
      name: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
      email: document.getElementById("email").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };
    console.log(user);

    const userInfo = {
      name: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
      email: document.getElementById("email").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    try {
      const response = await axios.post("/api/auth", userInfo);
      const { token } = response.data;

      localStorage.setItem("JWT", token);
    } catch (error) {
      console.error("Authentication Error: ", error);
    }
  };

  const testUser = () => {
    const ActiveJWT = localStorage.getItem("JWT");
    console.log("tested user with token: ", ActiveJWT);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    // call server to login
    // try {
    //   const response = axios.post("/api/auth", {
    //     username: document.getElementById("username").value,
    //     password: document.getElementById("password").value,
    //   });
    //   const { token } = response.data;
    //   localStorage.setItem("JWT", token);
    // } catch (error) {
    //   console.error("Authentication Error: ", error);
    // }
    console.log(email);
  };

  return (
    <>
      <div className={style.main}>
        <form className={style.block} onSubmit={loginHandler}>
          <h1>Welcome to FireAway!</h1>
          <h3>Sign up below!</h3>
          <input id="name" className={style.input} placeholder="Name"></input>
          <input
            id="surname"
            className={style.input}
            placeholder="Surname"
          ></input>
          <input
            id="email"
            className={style.input}
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <input
            id="username"
            className={style.input}
            placeholder="username"
          ></input>
          <input
            type="password"
            id="password"
            className={style.input}
            placeholder="passowrd"
          ></input>
          <button className={style.button}>
            Sign Up!
          </button>
          <p className={style.signIn}>
            Already have an account?
            <span className={style.underline}> Sign In Here!</span>
          </p>
        </form>
        <div className={style.test}>Test Token</div>
      </div>
    </>
  );
};

export default LoginComponent;

// STUFF HERE GOES IN SERVER FOLDER FOR THE BACKEND MANAGEMENT OF THE JWT ==================================
// =========================================================================================================
// const jwt = require('jsonwebtoken');
// const secretKey = 'your-secret-key';

// // Assuming you have validated the user's credentials
// const user = { id: 123, username: 'john_doe' };
// const token = jwt.sign(user, secretKey, { expiresIn: '1h' });

// res.json({ token });

// STUFF HERE GOES IN CLIENT FOLDER FOR THE FRONTEND MANAGEMENT OF THE JWT =================================
// =========================================================================================================
// import axios from 'axios';

// // Assuming you have a form to collect user credentials
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const credentials = { username: 'john_doe', password: 'secret' };

//   try {
//     const response = await axios.post('/api/auth', credentials);
//     const { token } = response.data;

//     // Store the token in localStorage or sessionStorage
//     localStorage.setItem('token', token);
//   } catch (error) {
//     console.error('Authentication failed', error);
//   }
// };

// STUFF HERE MANAGEST REQUESTS USING THE JWT  =============================================================
// =========================================================================================================
// import axios from 'axios';

// const token = localStorage.getItem('token');

// // Set the Authorization header with the JWT
// const axiosInstance = axios.create({
//   baseURL: '/api',
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

// // Use the axiosInstance for making authenticated requests
// const fetchUserData = async () => {
//   try {
//     const response = await axiosInstance.get('/user');
//     const userData = response.data;
//     console.log('User Data:', userData);
//   } catch (error) {
//     console.error('Error fetching user data', error);
//   }
// };
