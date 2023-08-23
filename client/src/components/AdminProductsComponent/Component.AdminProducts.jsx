import React, { useEffect, useState } from "react";
import style from "./Style.AdminProducts.module.scss";
import ProductRowItem from "./ProductRowItem/ProductRowItem";
import axios from "axios";

const AdminProducts = () => {
  const [divStyle, setDivStyle] = useState({});
  const [rifles, setRifles] = React.useState([]);
  const [pistols, setPistols] = React.useState([]);

  const expand = () => {
    const expanded = {
      height: "60vh",
    };
    setDivStyle(expanded);
    document.getElementById("products-heading").style.display = "none";
  };
  const collapse = () => {
    const collapsed = {
      height: "3vh",
    };
    setDivStyle(collapsed);
    document.getElementById("products-heading").style.display = "flex";
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/rifles")
      .then((res) => res.json())
      .then((data) => {
        setRifles(data);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch("http://localhost:5000/api/pistols")
      .then((res) => res.json())
      .then((data) => {
        setPistols(data);
      })
      .catch((err) => {
        console.log("pistol error:", err);
      });
  }, []);

  return (
    <>
      <div style={divStyle} className={style.main}>
        <h3 onClick={expand} id="products-heading">
          All Products -
        </h3>
        <div className={style.productsArea}>
          <div className={style.heading}>
            <p>Rifles:</p>
            <p className={style.right}>Stock:</p>
          </div>
          {rifles.map((rifle, index) => {
            // You can safely use the `index` variable here
            return (
              <ProductRowItem
                key={index}
                productData={rifle}
                alternateProp={index % 2 === 0 ? 1 : 2}
              />
            );
          })}
          <br/>
          <p>Pistols:</p>
          {pistols.map((pistols, index) => {
            return (
              <ProductRowItem
                key={index}
                productData={pistols}
                alternateProp={index % 2 === 0 ? 1 : 2}
              />
            );
          })}
        </div>
        <br />
        <h3 className={style.done} onClick={collapse}>
          Done -
        </h3>
      </div>
    </>
  );
};

export default AdminProducts;
