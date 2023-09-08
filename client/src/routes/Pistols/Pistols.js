import React from "react";
import NavBarComponent from "../../components/NavBarComponent/Component.NavBar";
import ProductCardComponent from "../../components/ProductCardComponent/Component.ProductCard";
import "../../styles.scss"
import style from "./Style.Pistols-Route.module.scss";
import FooterComponent from "../../components/FooterComponent/Component.Footer";

const PistolsRoute = (props) => {

    const admin = props.admin;
    const user = props.user;

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:5000/api/pistols")
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])



    return(<>
        <NavBarComponent admin={admin} user={user} />
        <p className={style.text}>Our Pistol stock:</p>
        <div className={style.productArea}>
            {products.map((product, index) => {
                return <ProductCardComponent key={index} productData={product} />
            })}

        </div>
        <FooterComponent />
    </>)
}

export default PistolsRoute;