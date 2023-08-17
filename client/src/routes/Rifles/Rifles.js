import React from "react";
import NavBarComponent from "../../components/NavBarComponent/Component.NavBar";
import ProductCardComponent from "../../components/ProductCardComponent/Component.ProductCard";
import "../../styles.scss"

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
        <div className="product-area">
            {products.map((product, index) => {
                return <ProductCardComponent key={index} productData={product} />
            })}

        </div>
    </>)
}

export default RiflesRoute;