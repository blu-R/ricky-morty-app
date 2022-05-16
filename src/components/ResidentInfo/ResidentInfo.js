import axios from "axios";
import React, { useState, useEffect } from "react";

import "./ResidentInfo.styles.css";

function ResidentInfo({ index, url }) {
    const [resident, setResident] = useState({});
    useEffect(() => {
        axios.get(url).then((res) => setResident(res.data));
    }, [url]);

    return (
        <li key={index} className="card-res">
            <img src={resident.image} alt="" />
            <p className="status">
                {resident.status === "Alive" ? (
                    <i className="fa-solid fa-circle green"></i>
                ) : resident.status === "Dead" ? (
                    <i className="fa-solid fa-circle red"></i>
                ) : (
                    <i className="fa-solid fa-circle grey"></i>
                )}

                {resident.status}
            </p>

            <div className="info">
                <h3>{resident.name}</h3>
                <div className="species">
                    species
                    <p>{resident.species}</p>
                </div>

                <div className="origin">
                    origin
                    <p>{resident.origin?.name}</p>
                </div>
                <div className="episodes">
                    episodes where appear
                    <p>{resident.episode?.length}</p>
                </div>
            </div>
        </li>
    );
}

export default ResidentInfo;
