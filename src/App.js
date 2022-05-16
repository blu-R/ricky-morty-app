// import React, { useEffect, useState } from "react";
import Location from "./components/Location/Location";
import banner from "./assets/images/banner.svg";
import title from "./assets/images/title.svg";

import "./App.css";
function App() {
    return (
        <div className="App">
            <header>
                <img className="title" src={title} alt="" />
                <img src={banner} alt="" />
            </header>

            <Location />
        </div>
    );
}

export default App;
