import React, { useState } from "react";
import style from "./Style.AdminAdd.module.scss";
import axios from "axios";

const AdminAdd = () => {

    const [divStyle, setDivStyle] = useState({});
    const [addProductType, setAddProductType] = useState("none");

    const expand = () => {
        const expanded = {
            height: '50vh'
        };
        setDivStyle(expanded);
        document.getElementById("add-heading").style.display = "none";
    }

    const collapse = () => {
        const collapsed = {
            height: '3vh'
        };
        document.getElementById("added-alert").style.display = "none";
        document.getElementById("added-button").style.backgroundColor = "#0652DD";
        setDivStyle(collapsed);
        document.getElementById("add-heading").style.display = "flex";
    }

    const handleNewProduct = (event) => {
        event.preventDefault();


        if(document.getElementById("addProductType").value === "none"){
            alert("Please select a product type.");
            return;
        } else if(document.getElementById("addName").value === ""){
            alert("Please enter a model name.");
            return;
        } else if(document.getElementById("addMake").value === ""){
            alert("Please enter a manufactor name.");
            return;
        } else if(document.getElementById("addCalibre").value === "none"){
            alert("Please select a calibre size.");
            return;
        } else if (addProductType === "Rifle"){
            axios.post("http://localhost:5000/api/rifle", {
                model: document.getElementById("addName").value,
                make: document.getElementById("addMake").value,
                calibre: document.getElementById("addCalibre").value,
                capacity: document.getElementById("addCapacity").value,
                attachment: document.getElementById("addAttachment").value,
                frame: document.getElementById("addFrame").value
                
            });
            console.log("Rifle added!");
        } else if (addProductType === "Pistol"){
            axios.post("http://localhost:5000/api/pistol", {
                model: document.getElementById("addName").value,
                make: document.getElementById("addMake").value,
                calibre: document.getElementById("addCalibre").value,
                attachment: document.getElementById("addAttachment").value,
                frame: document.getElementById("addFrame").value
            });
            console.log("Pistol added!");
        } else {
            console.log(addProductType);
            return;
        }




        document.getElementById("added-alert").style.display = "flex";
        document.getElementById("added-button").style.backgroundColor = "gray";
        document.getElementById("addProductType").value = "none";
        document.getElementById("addName").value = "";
        document.getElementById("addMake").value = "";
        document.getElementById("addCalibre").value = "none";

    }

    return(<>
        <form style={divStyle} className={style.main} onSubmit={handleNewProduct}>
            <h3 id="add-heading" onClick={expand}>Add Product -</h3>
            <br/>
            <p>Product Type:</p>
            <select id="addProductType" className={style.input}  onChange={(event) => setAddProductType(event.target.value)}>
                <option value="none" selected disabled hidden><span>Select Product Type</span></option>
                <option value="Rifle">Rifle</option>
                <option value="Pistol">Pistol</option>
            </select>
            <p>Model:</p>
            <input id="addName" placeholder="Model Name" className={style.input}/>
            <p>Make:</p>
            <input id="addMake" placeholder="Name Of Manufactor" className={style.input}/>
            <p>Calibre:</p>
            <select id="addCalibre" className={style.input}>
                <option value="none" selected disabled hidden><span>Select Calibre Size</span></option>
                <option value=".22">.22 (5.6mm)</option>
                <option value=".357">.357 - .380 (9mm)</option>
                <option value=".400">.400 - .425 (10mm)</option>
                <option value=".45">.45 (11.5mm)</option>
                <option value=".50">.50 (12.7mm)</option>

            </select>
            <p>Frame:</p>
            <select id="addFrame" className={style.input}>
                <option value="none" selected disabled hidden><span>Select Frame Colour</span></option>
                <option value="Black">Black</option>
                <option value="Tan">Tan</option>
                <option value="Wood">Wood</option>
                <option value="Grey">Grey</option>
                <option value="Pink">Pink</option>
            </select>
            <button id="added-button" className={style.button}>Add Product</button><span id="added-alert" className={style.addedAlert}>Product Added!</span>
            <p>Attachment:</p>
            <input id="addAttachment" placeholder="Define Attachment" className={style.input}/>
            { addProductType === "Rifle" ? <><p>Capacity:</p><input id="addCapacity" placeholder="Define Capacity" className={style.input}/></> : null }
            <br/>
            <h3 onClick={collapse}>Done -</h3>
        </form>
    </>)
}

export default AdminAdd;