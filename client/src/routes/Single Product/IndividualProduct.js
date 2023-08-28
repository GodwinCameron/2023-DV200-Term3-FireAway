import React, { useState } from "react";
import style from "./Style.Product-Route.module.scss";
import NavBarComponent from "../../components/NavBarComponent/Component.NavBar";
import Product from "../../components/ProductComponent/Component.Product";
import axios from "axios";
import FooterComponent from "../../components/FooterComponent/Component.Footer";
import { useLocation } from "react-router-dom";


const IndividualProduct = (props) => {

    const [foundProduct, setFoundProduct] = useState(null);
    const admin = props.admin;
    const user = props.user;

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get("id");

    axios.get(`http://localhost:5000/api/rifle/${productId}`)
    .then(res => {
        if (res.data === null) {
            setFoundProduct(false);
        }
        else {
            setFoundProduct(true);
        }
    })
    .catch(err => {
        console.log(err);
    })




    // const admin = props.admin;
    // const user = props.user;
    // console.log(admin, user);
    return(<>
        <NavBarComponent/>
        <div className={style.divider}> Now Viewing Product - <span className={style.span}>{productId}</span> All info regarding Product can be found below. Please <span className={style.span2}> contact us </span> for any questions regarding Product. This product can be found again under the appropriate section: RIFLES&#10095; SEMI-AUTOMATIC&#10095; 5.56x45MM</div>
        <div className={style.content}>
            {foundProduct ===true ? <Product admin={admin} user={user} /> : <div className={style.notFound}>Product not found</div>}
        </div>
        <FooterComponent />
    </>)
}

export default IndividualProduct;