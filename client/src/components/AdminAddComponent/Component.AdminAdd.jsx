import React, { useState } from "react";
import style from "./Style.AdminAdd.module.scss";

const AdminAdd = () => {

    const [divStyle, setDivStyle] = useState({});

    const expand = () => {
        const expanded = {
            height: '30vh'
        };
        setDivStyle(expanded);
    }

    const collapse = () => {
        const collapsed = {
            height: '3vh'
        };
        setDivStyle(collapsed);
    }

    return(<>
        <div style={divStyle} className={style.main}>
            <h3 onClick={expand}>Add Product -</h3>
            <br/>
            <p>Model:</p>
            <input id="addName" placeholder="Model Name" className={style.input}/>
            <p>Make:</p>
            <input id="addMake" placeholder="Name Of Manufactor" className={style.input}/>
            <p>Caliber:</p>
            <select id="addCaliber" className={style.input}>
                <option value="none" selected disabled hidden><span>Select Caliber Size</span></option>
                <option>Pistol: .22 (5.6mm)</option>
                <option>Pistol: .357 - .380 (9mm)</option>
                <option>Pistol: .400 - .425 (10mm)</option>
                <option>Pistol: .45 (11.5mm)</option>
                <option>Pistol: .50 (12.7mm)</option>
                <option>Rifle: .22LR (5.7mm)</option>
                <option>Rifle: .357 - .380 (9mm)</option>
                <option>Rifle: .400 - .425 (10mm)</option>
                <option>Rifle: .45 (11.5mm)</option>
                <option>Rifle: .50 (12.7mm)</option>

            </select>
            <h3 onClick={collapse}>Done -</h3>
        </div>
    </>)
}

export default AdminAdd;