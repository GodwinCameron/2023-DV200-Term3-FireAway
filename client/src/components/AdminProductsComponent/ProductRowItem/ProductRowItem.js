import React from "react";
import style from "./Style.ProductRowItem.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductRowItem = (props) => {
  const data = props.productData;
  const rowColour = props.alternateProp;
  const [editing, setEditing] = React.useState(false);
  const navigate = useNavigate();

  const ToProduct = () => {
    navigate("/product?id="+data._id);
  };

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
    console.log(data.attachment);
  };

  const deleteProduct = (e) => {
    e.stopPropagation();
    if (data.capacity === undefined) {
      axios
        .delete(`http://localhost:5000/api/pistol/` + data._id)
        .then((res) => {
          console.log(res);
          setEditing(!editing);

          props.refresh();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .delete(`http://localhost:5000/api/rifle/` + data._id)
        .then((res) => {
          console.log(res);
          setEditing(!editing);

          props.refresh();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };




  return (
    <>
      <div style={rowColourStyle} className={style.main} onClick={options}>
        {editing ? (
          <>
            <div className={style.editing}>Editing </div>
            <p onClick={ToProduct} className={style.ppHere}> Product-page</p>
            <p onClick={deleteProduct} className={style.delete}>
              {" "}
              Delete
            </p>
            <p className={style.cancel}> Cancel</p>
          </>
        ) : (
          <>
            <div className={style.productValue}>{data.make}</div>
            <div className={style.productValue}>{data.model}</div>
            <div className={style.productValue}>{data.calibre}</div>
            <div className={style.productValue}>{data.frame}</div>
            {data.attachment === " " ? (
              <div className={style.productValue}>N/A</div>
            ) : (
              <div className={style.productValue}>{data.attachment}</div>
            )}
            {data.capacity === undefined ? null : (
              <>
                {" "}
                <div className={style.productValue}>{data.capacity}- Round</div>
              </>
            )}
            <div className={style.adminData}>
              <div className={[style.productValue, style.price].join(" ")}>
                R {formattedPrice}
              </div>
              <div className={[style.productValue, style.stock].join(" ")}>
                {data.stock}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductRowItem;
