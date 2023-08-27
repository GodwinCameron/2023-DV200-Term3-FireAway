import React, { useEffect, useState } from "react";
import style from "./Style.Product.module.scss";
import productImage from "../../assets/images/ar.png";
import { useLocation } from "react-router-dom";
import adminEdit from "../../assets/icons/edit.svg";
import adminDelete from "../../assets/icons/delete.svg";
import adminUpdate from "../../assets/icons/tick.svg";
import axios from "axios";

const Product = (props) => {
  const admin = props.admin;
  const user = props.user;

  const [productData, setProductData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedPrice, setUpdatedPrice] = useState(0);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");

  useEffect(() => {
    fetch("http://localhost:5000/api/rifle/" + productId)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const editing = () => {
    setIsEditing(!isEditing);
  };

  var formattedPrice = parseInt(productData.price).toLocaleString();

  const updatePrice = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/api/rifle/" + productId, {
        price: updatedPrice,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsEditing(!isEditing);
    window.location.reload();
  };

  return (
    <>
      <div className={style.main}>
        <div className={style.leftCol}>
          <div className={style.productImage}>
            <img className={style.fitImg} alt="none" src={productImage} />
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
          {admin && 
              <div onClick={editing} className={style.adminButton}>
                <img src={adminEdit} />
              </div>
            }
            {productData.stock > 0 ? (
              <p className={style.inStock}>In Stock</p>
            ) : (
              <p>Out of Stock</p>
            )}
          </div>
          <div className={style.productFrame}>
            {productData.stock >= 1 && (
              <p className={style.bold}>
                Available in:{" "}
                <span className={style.text}>{productData.frame}</span>
              </p>
            )}
          </div>
          <div className={style.productTitle}>
            {admin && (
              <div className={style.adminButton}>
                <img src={adminEdit} />
              </div>
            )}
            <h1>
              {productData.make} {productData.model} {productData.calibre}{" "}
              {productData.capacity !== undefined
                ? " - " + productData.capacity + " Round Capacity"
                : null}
            </h1>
          </div>
          <div className={style.productDescription}>
            {admin && (
              <div className={style.adminButton}>
                <img src={adminEdit} />
              </div>
            )}
            <p className={style.widthFit}>
              Non deleniti iste quo deserunt consequatur 33 tempora rerum sed
              quia tenetur. 33 fugiat dolorem aut nesciunt quae sed
              reprehenderit ullam non earum voluptatibus qui laudantium
              molestiae est delectus officiis est minus doloremque
            </p>
          </div>
          <div className={style.productPrice}>
            {admin && 
              <div onClick={editing} className={style.adminButton}>
                <img src={adminEdit} />
              </div>
            }
            {isEditing === true ? (
              <form className={style.update} onSubmit={updatePrice}>
                R
                <input
                  onChange={(e) => setUpdatedPrice(e.target.value)}
                  placeholder={productData.price}
                  className={style.input}
                  type="number"
                ></input>
                <div className={style.spacer} />
                <button className={style.adminUpdate}>
                  <img src={adminUpdate} />
                </button>
              </form>
            ) : (
              <h1>R {formattedPrice}.00</h1>
            )}
          </div>

          {productData.stock >= 1 ? (
            <div className={style.productButtons}>
              <div className={style.productQuantity}>
                <p className={style.bold}>Quantity:</p>
                <input className={style.input} type="number" placeholder="1" />
              </div>
              <div className={style.productAddToCart}>
                <button className={style.button}>Add to Cart</button>
              </div>
            </div>
          ) : (
            <div className={style.notifyMne}>Notify me when stock arrives</div>
          )}
          {admin && (
            <div className={style.adminDelete}>
              <img src={adminDelete} />
            </div>
          )}
          {admin && (
            <div className={style.adminUpdate}>
              <img src={adminUpdate} />
            </div>
          )}
        </div>
        {/* create new button */}
      </div>
    </>
  );
};

export default Product;
