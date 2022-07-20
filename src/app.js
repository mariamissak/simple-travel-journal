import React from 'react';
import TravelCard from './travelCard.js';
import Navbar from './navbar.js';
import data from "./data.js"

export default function App() {
    let travels = data.map(travel => {
        return (
            <TravelCard {...travel} />
        )
    })
    return (
        <>
            <Navbar />
            <section className='travel-section'>{travels}</section>

        </>
    )
}