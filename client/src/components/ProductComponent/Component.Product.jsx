import React, { useEffect, useState } from "react";
import style from "./Style.Product.module.scss";
import loadingGif from "../../assets/images/load.gif";
import rifle from "../../assets/icons/rifle.png";
import pistol from "../../assets/icons/pistol.png";
import shotgun from "../../assets/icons/shotgun.png";
import { useLocation } from "react-router-dom";
import adminEdit from "../../assets/icons/edit.svg";
import adminDelete from "../../assets/icons/delete.svg";
import adminUpdate from "../../assets/icons/tick.svg";
import axios, { Axios } from "axios";
import ProductCardComponent from "../ProductCardComponent/Component.ProductCard";

const Product = (props) => {
  const admin = props.admin;
  const user = props.user;

  const [productData, setProductData] = useState([]);
  const [relatedProducts, setrelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentValue, setCurrentValue] = useState(1);
  const [isEditingPrice, setIsEditingPrice] = useState(false);
  const [isEditingStock, setIsEditingStock] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [updatedPrice, setUpdatedPrice] = useState(productData.price);
  const [updatedStock, setUpdatedStock] = useState(productData.stock);
  const [updatedTitle, setUpdatedTitle] = useState({
    make: productData.make,
    model: productData.model,
    calibre: productData.calibre,
    capacity: productData.capacity,
    frame: productData.frame,
  });
  const [updatedImage, setUpdatedImage] = useState(productData.image);


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");
  const productType = queryParams.get("type");

  useEffect(() => {
    fetch("http://localhost:5000/api/" + productType + "/" + productId)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    fetch("http://localhost:5000/api/" + productType + "s")
    .then((response) => response.json())
      .then((data) => {
        const limitedData = data.slice(0, 3);
        setrelatedProducts(limitedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let productImage;

  if (loading) {
    productImage = loadingGif;
  } else if (!productData.image) {
    productImage =
      productType === "rifle"
        ? rifle
        : productType === "pistol"
        ? pistol
        : shotgun;
  } else {
    productImage = productData.image;
  }

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
  const editingImage = () => {
    setIsEditingImage(!isEditingImage);
  };

  var formattedPrice = parseInt(productData.price).toLocaleString();

  const handleAddCartAmount = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 1 && newValue <= productData.stock) {
      setCurrentValue(newValue);
    }
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmed) {
      axios
        .delete("http://localhost:5000/api/" + productType + "/" + productId)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      // window.location.href = "/rifles";
      window.location.reload();
    } else {
      return;
    }
  };

  const updatePrice = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/api/" + productType + "/" + productId, {
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
      .put("http://localhost:5000/api/" + productType + "/" + productId, {
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
      .put("http://localhost:5000/api/" + productType + "/" + productId, {
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
  const updateImage = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/api/" + productType + "/" + productId, {
        image: updatedImage,
      })
      .then((response) => {
      })
      .catch((error) => {
        console.log(error);
      });
    setIsEditingImage(!isEditingImage);
    window.location.reload();
  };
  const updateDescript = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/api/" + productType + "/" + productId, {
        description: updatedImage,
      })
      .then((response) => {
      })
      .catch((error) => {
        console.log(error);
      });
    setIsEditingDescription(!isEditingDescription);
    window.location.reload();
  };


  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const product = {
      id: productData._id,
      quant: currentValue,
      currentStock: productData.stock,
      type: productType,
    }
    if (cart === null) {
      const newCart = [product];
      localStorage.setItem("cart", JSON.stringify(newCart));
      console.log(newCart);
    } else {
      const newCart = [...cart, product];
      localStorage.setItem("cart", JSON.stringify(newCart));
      console.log(newCart);
    }
  }

  return (
    <>
      <div className={style.main}>
        <div className={style.leftCol}>
          {isEditingImage && (
            <form onSubmit={updateImage}>
              <input
                placeholder="Paste Image Link Here"
                className={style.imgLink}
                onChange={(e) => setUpdatedImage(e.target.value)}
              />
              <button className={[style.adminUpdate, style.imgTick].join(" ")}>
                <img src={adminUpdate} />
              </button>
            </form>
          )}
          <div className={style.productImage}>
            <img className={style.fitImg} alt="none" src={productImage} />
            {admin && (
              <div
                className={[style.adminButton, style.imageChange].join(" ")}
                onClick={editingImage}
              >
                <img src={adminEdit} />
              </div>
            )}
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
              <p className={style.inStock}>{productData.stock} In Stock</p>
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
              <div onClick={editingDescription} className={style.adminButton}>
                <img src={adminEdit} />
              </div>
            )}
            {isEditingDescription === true ? (
              <form className={style.updateLong} onSubmit={updateDescript}>
                <textarea
                  onChange={(e) => setUpdatedImage(e.target.value)}
                  placeholder={productData.description}
                  className={style.inputLong}
                  type="text"
                  defaultValue={productData.description}
                ></textarea>
                <div className={style.spacer} />
                <button className={style.adminUpdate}>
                  <img src={adminUpdate} />
                </button>
              </form>
            ) : (
            <p className={style.widthFit}>{productData.description}</p>
            )}
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
                <button onClick={addToCart} className={style.button}>Add to Cart</button>
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
          <h2 className={style.related}>Check out some related products!</h2>
          <div className={style.relatedProducts}>
          {relatedProducts.map((relatedProducts, index) => {
            return (
              <ProductCardComponent key={index} productData={relatedProducts} />
            );
          })}
          </div>
        </div>
        {/* create new button */}
      </div>
    </>
  );
};

export default Product;
