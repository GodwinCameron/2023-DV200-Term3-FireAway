import React from "react";
import NavBarComponent from "../components/NavBarComponent/Component.NavBar";
import ProductCardComponent from "../components/ProductCardComponent/Component.ProductCard";
import "../styles.scss"

const RiflesRoute = () => {
    return(<>
        <NavBarComponent />
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

        </div>
    </>)
}

export default RiflesRoute;