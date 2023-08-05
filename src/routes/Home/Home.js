import React from "react";
import NavBarComponent from "../../components/NavBarComponent/Component.NavBar";
import ImageSlider from "../../components/ImageSliderComponent/Component.ImageSlider";
import FooterComponent from "../../components/FooterComponent/Component.Footer";
import ProductCardComponent from "../../components/ProductCardComponent/Component.ProductCard";
import "./Style.Home-Route.module.scss";
import SecondaryNav from "../../components/SecondaryNav/Component.SecondaryNav";


const HomeRoute = () => {

    const handleDragStart = (e) => e.preventDefault();

    return(<>
        <NavBarComponent />
        <ImageSlider />
        {/* TODO: Complete Secondary nav - create and add icons */}
        <SecondaryNav />
        <h1>New Items!</h1>
        hi
        {/* <FooterComponent /> */}
    </>)
}

export default HomeRoute;