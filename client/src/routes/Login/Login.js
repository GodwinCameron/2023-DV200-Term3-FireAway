import React from "react";
import "./Style.Login-Route.module.scss";
import LoginComponent from "../../components/LoginComponent/Component.Login";
import FooterComponent from "../../components/FooterComponent/Component.Footer";

const LoginRoute = () => {
  return (
    <div>
        <LoginComponent />
        <FooterComponent />
    </div>
  );
};

export default LoginRoute;
