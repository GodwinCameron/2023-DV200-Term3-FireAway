import React from "react";
import style from "./Style.ProductRowItem.module.scss";
import axios from "axios";

const ProductRowItem = (props) => {
  const data = props.productData;
  const rowColour = props.alternateProp;
  const [editing, setEditing] = React.useState(false);

  if (rowColour === 1) {
    var rowColourStyle = {
      backgroundColor: "rgb(212, 224, 240)",
    };
  } else {
    var rowColourStyle = {
      backgroundColor: "rgba(0, 0, 0, 0)",
    };
  }
  var formattedPrice = parseInt(data.price).toLocaleString();

  const options = () => {
    setEditing(!editing);
  };

  const deleteProduct = () => {
      fetch("http://localhost:5000/api/rifle/" + data._id)
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div style={rowColourStyle} className={style.main} onClick={options}>
        {editing ? (
          <>
            <div className={style.editing}>Delete? </div>
            <p onClick={deleteProduct} className={style.delete}>
              {" "}
              Yes-Delete
            </p>
            <p className={style.cancel}> No-Cancel</p>
          </>
        ) : (
          <>
            <div className={style.productValue}>{data.make}</div>
            <div className={style.productValue}>{data.model}</div>
            <div className={style.productValue}>{data.calibre}</div>
            <div className={style.productValue}>{data.frame}</div>
            <div className={style.productValue}>{data.attachment}</div>
            <div className={style.productValue}>{data.capacity}- Round</div>
            <div className={[style.productValue, style.price].join(" ")}>
              R {formattedPrice}
            </div>
            <div className={[style.productValue, style.stock].join(" ")}>
              {data.stock}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductRowItem;
