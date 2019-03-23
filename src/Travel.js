// src/Travel.js
import React from "react";

const Travel = ({destination, country, img, distance}) => (
    <div>
        <div>Destination : {destination}</div>
        <div>country : {country}</div>
        <div><img src={img} alt=''/></div>
        <div>Distance : {distance}</div>
    </div>
);

export default Travel;

