import React, { useState } from "react";
import style from "./Style.Register.module.scss";
import axios from "axios";
import { useNavigate } from 'react-router';


const RegisterComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const CreateUser = async (e) => {
    e.preventDefault();
    const userInfo = {
      name: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    console.log(userInfo);

    const ToLogin = () => {
      navigate('/login?registered=true');
    };

    // Check for user in database - backend
    axios
      .get("http://localhost:5000/api/getUser/" + userInfo.username)
      .then((response) => {
        if (response.data !== null) {
          alert("Username already exists");
        } else {
          console.log("User does not exist, creating user");
          try {
            axios.post("http://localhost:5000/api/register", userInfo)
            .then(() => {
              document.getElementsByClassName(style.message)[0].style.display = "flex";
              setTimeout(ToLogin, 1500);
            })
          } catch (error) {
            console.error("Register Error: ", error);
            console.log(error);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <>
      <div className={style.main}>
        <form className={style.block} onSubmit={CreateUser}>
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
          <button className={style.button}>Sign Up!</button>
          <p className={style.signIn}>
            Already have an account?
            <span className={style.underline}> Sign In Here!</span>
          </p>
        </form>
        <div className={style.message}>User Successfully Created! Proceeding to Sign in</div>
      </div>
    </>
  );
};

export default RegisterComponent;

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
