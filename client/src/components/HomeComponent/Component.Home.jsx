import React, { useEffect, useState } from "react";
import style from "./Style.Home.module.scss";
import club1 from "../../assets/images/1.JPG";
import club2 from "../../assets/images/2.JPG";
import club3 from "../../assets/images/3.JPG";
import club4 from "../../assets/images/4.JPG";
import ad1 from "../../assets/images/ad1.JPG";
import advert from "../../assets/images/advert.png";
import axios from "axios";
import ProductCardComponent from "../ProductCardComponent/Component.ProductCard";

const HomeComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/rifles")
      .then((response) => {
        let data = response.data;
        const limitedData = data.slice(data.length - 4, data.length);
        setProducts(limitedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className={style.main}>
        <div className={style.clubs}>
          <div className={style.club}>
            <img src={club1} />
          </div>
          <div className={style.club}>
            <img src={club2} />
          </div>
          <div className={style.club}>
            <img src={club3} />
          </div>
          <div className={style.club}>
            <img src={club4} />
          </div>
        </div>
        <br />
        <div className={style.newProducts}>
          <p className={style.text}>New products!</p>
          {products.map((product, index) => {
            return <ProductCardComponent key={index} productData={product} />;
          })}
        </div>
        <div className={style.ads}>
          <div className={style.ad}>
            <img className={style.image} src={ad1} />
          </div>
          <div className={style.ad}>
            <img
              className={style.image}
              src="https://safarioutdoor.co.za/media/wysiwyg/flyingfish.jpg"
            />
          </div>
        </div>
        <div className={style.blurb}>
          <h1 className={style.heading}>
            The One Stop Shop For All Your FireArm needs!
          </h1>
          <p className={style.text}>
            FireAway! Store is a fullstack MERN project, created by Cameron
            Godwin for an{" "}
            <a href="https://www.openwindow.co.za/interactive-development/" target="_blank">
              <span className={style.span}>
                Open Window 2023 Interactive Development
              </span>
            </a>{" "}
            course. The purpose of this project is so showcase the use and
            appliance of the MERN stack in accordance with the specified brief.
            While all elements seen on this web app were created by Cameron
            Godwin, the images used are not owned by Cameron Godwin and are used
            for educational purposes only. Most if not all of the styling was
            heavily inspired by{" "}
            <a href="https://safarioutdoor.co.za" target="_blank">
              <span className={style.span}>safarioutdoor.co.za.</span>
            </a>{" "}
            and is not intended to be used for commercial purposes.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
