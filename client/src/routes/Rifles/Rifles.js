import React from "react";
import NavBarComponent from "../../components/NavBarComponent/Component.NavBar";
import ProductCardComponent from "../../components/ProductCardComponent/Component.ProductCard";
import "../../styles.scss"
import style from "./Style.Rifles-Route.module.scss";

const RiflesRoute = () => {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:5000/api/rifles")
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])



    return(<>
        <NavBarComponent />
        <p className={style.text}>Our Rifle stock:</p>
        <div className={style.productArea}>
            {products.map((product, index) => {
                return <ProductCardComponent key={index} productData={product} />
            })}

        </div>
    </>)
}

export default RiflesRoute;