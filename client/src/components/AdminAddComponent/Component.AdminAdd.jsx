import React, { useState } from "react";
import style from "./Style.AdminAdd.module.scss";
import axios from "axios";
import instance from "../../api";
// import api from '../../api';

const AdminAdd = () => {
  const [divStyle, setDivStyle] = useState({});
  const [addProductType, setAddProductType] = useState("none");

  const expand = () => {
    const expanded = {
      height: "70vh",
    };
    setDivStyle(expanded);
    document.getElementById("add-heading").style.display = "none";
  };

  const collapse = () => {
    const collapsed = {
      height: "3vh",
    };
    document.getElementById("added-alert").style.display = "none";
    document.getElementById("added-button").style.backgroundColor = "#0652DD";
    setDivStyle(collapsed);
    document.getElementById("add-heading").style.display = "flex";
  };

  const handleNewProduct = (event) => {
    event.preventDefault();

    if (document.getElementById("addProductType").value === "none") {
      alert("Please select a product type.");
      return;
    } else if (document.getElementById("addName").value === "") {
      alert("Please enter a model name.");
      return;
    } else if (document.getElementById("addMake").value === "") {
      alert("Please enter a manufactor name.");
      return;
    } else if (document.getElementById("addCalibre").value === "none") {
      alert("Please select a calibre size.");
      return;
    } else if (
      addProductType === "Rifle" &&
      document.getElementById("addCapacity").value === ""
    ) {
      alert("Please enter a capacity size.");
      return;
    } else if (
      addProductType === "Rifle" ||
      addProductType === "Pistol" ||
      addProductType === "Shotgun"
    ) {
      const lowerCaseProductType = addProductType.toLowerCase();
      instance.post(`http://localhost:5000/api/${lowerCaseProductType}`, {
        model: document.getElementById("addName").value,
        make: document.getElementById("addMake").value,
        calibre: document.getElementById("addCalibre").value,
        attachment: document.getElementById("addAttachment").value,
        frame: document.getElementById("addFrame").value,
        price: document.getElementById("price").value,
        stock: document.getElementById("stock").value,
        image: document.getElementById("image").value,
        thumbnail: document.getElementById("thumbnail").value,
        ...(addProductType === "Rifle"
          ? { capacity: document.getElementById("addCapacity").value }
          : {}),
        ...(addProductType === "Shotgun" ? { tubemag: true } : {}),
      });
      console.log(`${addProductType} added!`);
    } else {
      console.log(addProductType);
      console.log(
        "Error adding product. Request structure body: " +
          {
            platform: addProductType,
            model: document.getElementById("addName").value,
            make: document.getElementById("addMake").value,
            calibre: document.getElementById("addCalibre").value,
            capacity: document.getElementById("addCapacity").value,
            attachment: document.getElementById("addAttachment").value,
            frame: document.getElementById("addFrame").value,
            price: document.getElementById("price").value,
            stock: document.getElementById("stock").value,
            image: document.getElementById("image").value,
            thumbnail: document.getElementById("thumbnail").value,
          }
      );
      alert("Something went wrong, please try again.");
      return;
    }

    document.getElementById("added-alert").style.display = "flex";
    document.getElementById("added-button").style.backgroundColor = "gray";
    document.getElementById("addProductType").value = "none";
    document.getElementById("addName").value = "";
    document.getElementById("addMake").value = "";
    document.getElementById("addCalibre").value = "none";
    document.getElementById("addAttachment").value = "";
    document.getElementById("addFrame").value = "none";
    document.getElementById("price").value = "";
    document.getElementById("stock").value = 1;
  };

  return (
    <>
      <form style={divStyle} className={style.main} onSubmit={handleNewProduct}>
        <h3 id="add-heading" onClick={expand}>
          Add Product -
        </h3>
        <br />
        <p>Product Type:</p>
        <select
          id="addProductType"
          className={style.input}
          onChange={(event) => setAddProductType(event.target.value)}
        >
          <option value="none" selected disabled hidden>
            <span>Select Product Type</span>
          </option>
          <option value="Rifle">Rifle</option>
          <option value="Pistol">Pistol</option>
          <option value="Shotgun">Shotgun</option>
        </select>
        <p>Model:</p>
        <input id="addName" placeholder="Model Name" className={style.input} />
        <p>Make:</p>
        <input
          id="addMake"
          placeholder="Name Of Manufactor"
          className={style.input}
        />
        <p>Calibre:</p>
        <select id="addCalibre" className={style.input}>
          <option value="none" selected disabled hidden>
            <span>Select Calibre Size</span>
          </option>
          <option value=".22">.22 (5.6mm)</option>
          <option value="5.56 NATO">.223 (5.56 NATO)</option>
          <option value="7.62x39">.305 (7.62x39mm - AK)</option>
          <option value="7.62x54">.308 (7.62x54mm)</option>
          <option value=".308">.308 (winchester)</option>
          <option value=".357">.357 - .380 (9mm)</option>
          <option value=".400">.400 - .425 (10mm)</option>
          <option value=".45">.45 (11.5mm)</option>
          <option value=".50">.50 (12.7mm)</option>
        </select>
        <p>Frame:</p>
        <select id="addFrame" className={style.input}>
          <option value="none" selected disabled hidden>
            <span>Select Frame Colour</span>
          </option>
          <option value="Black">Black</option>
          <option value="Tan">Tan</option>
          <option value="Wood">Wood</option>
          <option value="Grey">Grey</option>
          <option value="Pink">Pink</option>
        </select>
        <p>Attachment:</p>
        <input
          id="addAttachment"
          placeholder="Define Attachment"
          className={style.input}
        />
        {addProductType === "Rifle" ? (
          <>
            <p>Capacity:</p>
            <input
              id="addCapacity"
              placeholder="Define Capacity"
              className={style.input}
            />
          </>
        ) : null}
        {addProductType === "Shotgun" ? (
          <>
            <p>Tubemag:</p>
            <div className={style.tubeMagRadio}>
              <label className={style.spacer} htmlFor="addTubemagYes">
                Yes
              </label>
              <input
                type="radio"
                id="addTubemagYes"
                name="addTubemag"
                value={true}
              />

              <label className={style.spacer} htmlFor="addTubemagNo">
                No
              </label>
              <input
                type="radio"
                id="addTubemagNo"
                name="addTubemag"
                value={false}
              />
            </div>
          </>
        ) : null}
        <p>Amount:</p>
        <input
          id="stock"
          placeholder="Stock - Defaulted to 1 item"
          className={style.input}
        />
        <p>Image:</p>
        <input id="image" placeholder="Image Link" className={style.input} />
        <p>Thumbnail Image:</p>
        <input
          id="thumbnail"
          placeholder="Image Link"
          className={style.input}
        />
        <p>Price:</p>
        <div className={style.priceBlock}>
          R
          <input
            type="number"
            id="price"
            placeholder="0.00"
            className={[style.input, style.priceAmount].join(" ")}
          />
        </div>
        <button id="added-button" className={style.button}>
          Add Product
        </button>
        <span id="added-alert" className={style.addedAlert}>
          Product Added!
        </span>
        <br />
        <h3 className={style.done} onClick={collapse}>
          Done -
        </h3>
      </form>
    </>
  );
};

export default AdminAdd;
