import React from "react";
import NavBarComponent from "../../components/NavBarComponent/Component.NavBar";
import ImageSlider from "../../components/ImageSliderComponent/Component.ImageSlider";
import FooterComponent from "../../components/FooterComponent/Component.Footer";
import "./Style.Home-Route.module.scss";
import SecondaryNav from "../../components/SecondaryNav/Component.SecondaryNav";
import ImageMenu from "../../components/ImageMenuComponent/Component.ImageMenu";
import AdminHeader from "../../components/AdminHeaderComponent/Component.AdminHeader";
import HomeComponent from "../../components/HomeComponent/Component.Home";

const HomeRoute = (props) => {

    const admin = props.admin;
    const user = props.user;



    return(<>
    {admin && <AdminHeader user={user} />}
        <NavBarComponent admin={admin} user={user} />
        <ImageSlider />
        <SecondaryNav />
        <ImageMenu />
        <br/>
        <HomeComponent />
        <FooterComponent />
    </>)
}

export default HomeRoute;