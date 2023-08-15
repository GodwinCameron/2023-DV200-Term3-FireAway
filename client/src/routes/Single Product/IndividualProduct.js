import React from "react";
import style from "./Style.Product-Route.module.scss";
import NavBarComponent from "../../components/NavBarComponent/Component.NavBar";
import Product from "../../components/ProductComponent/Component.Product";

const IndividualProduct = () => {
    return(<>
        <NavBarComponent/>
        <div className={style.divider}> Now Viewing Product - <span className={style.span}>64c77f0143e4cb47e1ddb8c2</span> All info regarding Product can be found below. Please <span className={style.span2}> contact us </span> for any questions regarding Product. This product can be found again under the appropriate section: RIFLES&#10095; SEMI-AUTOMATIC&#10095; 5.56x45MM</div>
        <div className={style.content}>
            <Product />
        </div>
    </>)
}

export default IndividualProduct;