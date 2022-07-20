import React from 'react';
import globeImg from "./images/globe.png"


export default function Navbar() {
    return (
        <nav>
            <img src={globeImg} />
            <h1>my travel journal.</h1>
        </nav>
    )
}