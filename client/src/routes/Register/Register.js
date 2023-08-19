import React from "react";
import "./Style.Register-Route.module.scss";
import RegisterComponent from "../../components/RegisterComponent/Component.Register";
import FooterComponent from "../../components/FooterComponent/Component.Footer";

const RegisterRoute = () => {
  return (
    <div>
        <RegisterComponent />
        <FooterComponent />
    </div>
  );
};

export default RegisterRoute;
