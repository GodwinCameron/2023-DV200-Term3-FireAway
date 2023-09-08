import React, { useEffect, useState } from "react";
import style from "./Style.Product-Route.module.scss";
import NavBarComponent from "../../components/NavBarComponent/Component.NavBar";
import Product from "../../components/ProductComponent/Component.Product";
import axios from "axios";
import FooterComponent from "../../components/FooterComponent/Component.Footer";
import { useLocation } from "react-router-dom";

const IndividualProduct = (props) => {
  const [foundProduct, setFoundProduct] = useState(false);
  const admin = props.admin;
  const user = props.user;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");
  const productType = queryParams.get("type");

  // axios.get(`http://localhost:5000/api/rifle/${productId}`)
  // .then(res => {
  //     if (res.data === null) {
  //         setFoundProduct(false);
  //     }
  //     else {
  //         setFoundProduct(true);
  //     }
  // })
  // .catch(err => {
  //     console.log(err);
  // })


  useEffect(() => {
    if (productId.length === 24) {
    if (productType === "rifle") {
      axios
        .get(`http://localhost:5000/api/rifle/${productId}`)
        .then((res) => {
          if (res.data === null) {
            setFoundProduct(false);
          } else {
            setFoundProduct(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (productType === "pistol") {
      axios
        .get(`http://localhost:5000/api/pistol/${productId}`)
        .then((res) => {
          if (res.data === null) {
            setFoundProduct(false);
          } else {
            setFoundProduct(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (productType === "shotgun") {
      axios
        .get(`http://localhost:5000/api/shotgun/${productId}`)
        .then((res) => {
          if (res.data === null) {
            setFoundProduct(false);
          } else {
            setFoundProduct(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } else {
    setFoundProduct(false);
  }
  }, []);

  // const admin = props.admin;
  // const user = props.user;
  // console.log(admin, user);
  return (
    <>
      <NavBarComponent admin={admin} user={user} />
      <div className={style.divider}>
        {" "}
        Now Viewing Product - <span className={style.span}>
          {productId}
        </span>{" "}
        All info regarding Product can be found below. Please{" "}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=200109@virtualwindow.co.za&su=FireAway+Query&body=Good+day,+Cameron!+Please+assist+me+regarding+the+'FireAway'+Store."
            target="_blank"><span className={style.span2}> contact us </span></a> for any questions
        regarding Product. This product can be found again under the appropriate
        section: RIFLES&#10095; SEMI-AUTOMATIC&#10095; 5.56x45MM
      </div>
      <div className={style.content}>
        {foundProduct === true ? (
          <Product admin={admin} user={user} />
        ) : (
          <div className={style.notFound}>Product not found</div>
        )}
      </div>
      <FooterComponent />
    </>
  );
};

export default IndividualProduct;
