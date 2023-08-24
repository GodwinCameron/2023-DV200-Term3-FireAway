import React, { useState } from "react";
import style from "./Style.Product.module.scss";
import productImage from "../../assets/images/ar.png";

const Product = () => {
  const stock = 1;

  //   const stockColor = () => {
  //     if (stock > 0) {
  //       document.getElementById("stock").style.color = "rgb(151, 226, 39)";
  //     } else {
  //       document.getElementById("stock").style.color = "rgb(226, 39, 39)";
  //     }
  //   };

  return (
    <>
      <div className={style.main}>
        <div className={style.leftCol}>
          <div className={style.productImage}>
            <img alt="none" src={productImage} />
          </div>
          <div className={style.smallText}>
            <p>
              Lorem ipsum dolor sit amet. In dolorum cupiditate At iusto
              mollitia est consectetur voluptatem ea esse quod nam sint
              reprehenderit aut mollitia nesciunt? Qui amet enim est tempore
              perferendis rem ipsa voluptate. Ad asperiores modi eum iure quasi
              sed quod maiores ex cupiditate dolorum.{" "}
            </p>
            <p>
              Non deleniti iste quo deserunt consequatur 33 tempora rerum sed
              quia tenetur. 33 fugiat dolorem aut nesciunt quae sed
              reprehenderit ullam non earum voluptatibus qui laudantium
              molestiae est delectus officiis est minus doloremque.{" "}
            </p>
            <p>
              Et possimus soluta qui reiciendis quidem est enim nostrum rem
              corporis distinctio sit delectus voluptatem. Ex reiciendis
              reprehenderit vel ducimus ipsa At veniam amet sed quod aperiam.{" "}
            </p>
          </div>
        </div>
        <div className={style.rightCol}>
          {/* product in stock */}
          <div id="stock" className={style.productInStock}>
            {stock > 0 ? <p>In Stock</p> : <p>Out of Stock</p>}
          </div>
          <div className={style.productFrame}>
            <p className={style.bold}>
              Availible in: <span className={style.text}> Black</span>
            </p>
          </div>
          <div className={style.productTitle}>
            <h1>AR 15 - 5.56 NATO - 16" Barrel - 30 Round Capacity</h1>
          </div>
          <div className={style.productDescription}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
              Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
              Quisquam, voluptatum. Quisquam,
            </p>
          </div>
          <div className={style.productPrice}>
            <h1>R 12,000.00</h1>
          </div>
          <div className={style.productButtons}>
            <div className={style.productQuantity}>
              <p className={style.bold}>Quantity:</p>
              <input className={style.input} type="number" placeholder="1" />
            </div>
            <div className={style.productAddToCart}>
              <button className={style.button}>Add to Cart</button>
            </div>
          </div>
        </div>
        {/* create new button */}
      </div>
    </>
  );
};

export default Product;
