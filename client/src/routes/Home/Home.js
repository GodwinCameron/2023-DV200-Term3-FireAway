import React from "react";
import NavBarComponent from "../../components/NavBarComponent/Component.NavBar";
import ImageSlider from "../../components/ImageSliderComponent/Component.ImageSlider";
import FooterComponent from "../../components/FooterComponent/Component.Footer";
import "./Style.Home-Route.module.scss";
import SecondaryNav from "../../components/SecondaryNav/Component.SecondaryNav";
import ImageMenu from "../../components/ImageMenuComponent/Component.ImageMenu";


const HomeRoute = () => {



    return(<>
        <NavBarComponent />
        <ImageSlider />
        <SecondaryNav />
        <ImageMenu />
        <FooterComponent />
    </>)
}

export default HomeRoute;