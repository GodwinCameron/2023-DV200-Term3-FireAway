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
  const [currentValue, setCurrentValue] = useState(1);
  const [isEditingPrice, setIsEditingPrice] = useState(false);
  const [isEditingStock, setIsEditingStock] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [updatedPrice, setUpdatedPrice] = useState(productData.price);
  const [updatedStock, setUpdatedStock] = useState(productData.stock);
  const [updatedTitle, setUpdatedTitle] = useState({
    make: productData.make,
    model: productData.model,
    calibre: productData.calibre,
    capacity: productData.capacity,
    frame: productData.frame,
  });

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

  const editingPrice = () => {
    setIsEditingPrice(!isEditingPrice);
  };
  const editingStock = () => {
    setIsEditingStock(!isEditingStock);
  };
  const editingTitle = () => {
    setIsEditingTitle(!isEditingTitle);
  };
  const editingDescription = () => {
    setIsEditingDescription(!isEditingDescription);
  };

  var formattedPrice = parseInt(productData.price).toLocaleString();

  const handleAddCartAmount = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (
      !isNaN(newValue) &&
      newValue >= 1 &&
      newValue <= productData.stock
    ) {
      setCurrentValue(newValue);
    }
  };

  const handleDelete = () => {
    axios
        .delete("http://localhost:5000/api/rifle/" + productId)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    // window.location.href = "/rifles";
    window.location.reload();
    };

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
    setIsEditingPrice(!isEditingPrice);
    window.location.reload();
  };
  const updateStock = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/api/rifle/" + productId, {
        stock: updatedStock,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsEditingStock(!isEditingStock);
    window.location.reload();
  };
  const updateTitle = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/api/rifle/" + productId, {
        make: updatedTitle.make,
        model: updatedTitle.model,
        calibre: updatedTitle.calibre,
        capacity: updatedTitle.capacity,
        frame: updatedTitle.frame,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsEditingPrice(!isEditingPrice);
    window.location.reload();
  };
  //   const updatePrice = (e) => {
  //     e.preventDefault();
  //     axios
  //       .put("http://localhost:5000/api/rifle/" + productId, {
  //         price: updatedPrice,
  //       })
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     setIsEditingPrice(!isEditingPrice);
  //     window.location.reload();
  //   };

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
            {admin && (
              <div className={style.adminButton} onClick={editingStock}>
                <img src={adminEdit} />
              </div>
            )}
            {productData.stock > 0 ? (
              <p className={style.inStock}>In Stock</p>
            ) : (
              <p>Out of Stock</p>
            )}
            {isEditingStock === true ? (
              <form className={style.update} onSubmit={updateStock}>
                {" "}
                <input
                  onChange={(e) => setUpdatedStock(e.target.value)}
                  placeholder={productData.stock}
                  className={style.input}
                  type="number"
                  defaultValue={productData.stock}
                ></input>
                <div className={style.spacer} />
                <button className={style.adminUpdate}>
                  <img src={adminUpdate} />
                </button>
              </form>
            ) : null}
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
              <div className={style.adminButton} onClick={editingTitle}>
                <img src={adminEdit} />
              </div>
            )}
            {isEditingTitle === true ? (
              <form
                className={[style.update, style.tall].join(" ")}
                onSubmit={updateTitle}
              >
                {" "}
                Make:
                <input
                  onChange={(e) =>
                    setUpdatedTitle((updatedTitle) => ({
                      ...updatedTitle,
                      make: e.target.value,
                    }))
                  }
                  placeholder={productData.make}
                  className={style.input}
                  type="text"
                  defaultValue={productData.title}
                />
                , Model:
                <input
                  onChange={(e) =>
                    setUpdatedTitle((updatedTitle) => ({
                      ...updatedTitle,
                      model: e.target.value,
                    }))
                  }
                  placeholder={productData.model}
                  className={style.input}
                  type="text"
                  defaultValue={productData.title}
                />
                , Calibre:
                <input
                  onChange={(e) =>
                    setUpdatedTitle((updatedTitle) => ({
                      ...updatedTitle,
                      calibre: e.target.value,
                    }))
                  }
                  placeholder={productData.calibre}
                  className={style.input}
                  type="text"
                  defaultValue={productData.title}
                />
                , Capacity:
                <input
                  onChange={(e) =>
                    setUpdatedTitle((updatedTitle) => ({
                      ...updatedTitle,
                      capacity: e.target.value,
                    }))
                  }
                  placeholder={productData.capacity}
                  className={style.input}
                  type="number"
                  defaultValue={productData.title}
                />
                , Frame:
                <input
                  onChange={(e) =>
                    setUpdatedTitle((updatedTitle) => ({
                      ...updatedTitle,
                      frame: e.target.value,
                    }))
                  }
                  placeholder={productData.frame}
                  className={style.input}
                  type="text"
                  defaultValue={productData.title}
                />
                <div className={style.spacer} />
                <button className={style.adminUpdate}>
                  <img src={adminUpdate} />
                </button>
              </form>
            ) : (
              <h1>
                {productData.make} {productData.model} {productData.calibre}{" "}
                {productData.capacity !== undefined
                  ? " - " + productData.capacity + " Round Capacity"
                  : null}
              </h1>
            )}
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
            {admin && (
              <div onClick={editingPrice} className={style.adminButton}>
                <img src={adminEdit} />
              </div>
            )}
            {isEditingPrice === true ? (
              <form className={style.update} onSubmit={updatePrice}>
                R
                <input
                  onChange={(e) => setUpdatedPrice(e.target.value)}
                  placeholder={productData.price}
                  className={style.input}
                  type="number"
                  defaultValue={productData.price}
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
                <input
                  className={style.input}
                  onChange={handleAddCartAmount}
                  max={productData.stock}
                  min="1"
                  type="number"
                  placeholder="1"
                  value={currentValue}
                />
              </div>
              <div className={style.productAddToCart}>
                <button className={style.button}>Add to Cart</button>
              </div>
            </div>
          ) : (
            <div className={style.notifyMne}>Notify me when stock arrives</div>
          )}
          {admin && (
            <div className={style.deteleProduct}>
              <div onClick={handleDelete} className={style.adminDelete}>
                <img src={adminDelete} />
              </div>
              <p>Delete Product</p>
            </div>
          )}
        </div>
        {/* create new button */}
      </div>
    </>
  );
};

export default Product;
