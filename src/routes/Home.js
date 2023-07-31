import React from "react";
import NavBarComponent from "../components/NavBarComponent/Component.NavBar";
import ImageSlider from "../components/ImageSliderComponent/Component.ImageSlider";
import FooterComponent from "../components/FooterComponent/Component.Footer";
import ProductCardComponent from "../components/ProductCardComponent/Component.ProductCard";

const HomeRoute = () => {
    return(<>
        <NavBarComponent />
        <ImageSlider />
        <div className="product-area">
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
        </div>
        <FooterComponent />
    </>)
}

export default HomeRoute;