import React from "react";
import NavBarComponent from "../../components/NavBarComponent/Component.NavBar";
import ImageSlider from "../../components/ImageSliderComponent/Component.ImageSlider";
import FooterComponent from "../../components/FooterComponent/Component.Footer";
import "./Style.Home-Route.module.scss";
import SecondaryNav from "../../components/SecondaryNav/Component.SecondaryNav";
import ImageMenu from "../../components/ImageMenuComponent/Component.ImageMenu";
import AdminHeader from "../../components/AdminHeaderComponent/Component.AdminHeader";

const HomeRoute = (props) => {

    const admin = props.admin;
    const user = props.user;
    const testData = props;
    console.log(testData);


    return(<>
    {admin && <AdminHeader user={user} />}
        <NavBarComponent admin={admin} />
        <ImageSlider />
        <SecondaryNav />
        <ImageMenu />
        <FooterComponent />
    </>)
}

export default HomeRoute;