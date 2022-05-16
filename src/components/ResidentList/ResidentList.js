import React from "react";
import ResidentInfo from "../ResidentInfo/ResidentInfo";

import "./ResidentList.styles.css";

function ResidentList({ residents, loading }) {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <ul className="container-residents">
                {residents?.map((resident, index) => (
                    <ResidentInfo key={index} url={resident} />
                ))}
            </ul>
        </div>
    );
}

export default ResidentList;
