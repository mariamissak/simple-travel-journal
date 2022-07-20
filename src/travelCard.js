import React from 'react'
import locationImage from "./images/location.png"

export default function TravelCard(props) {
    return (
        <>
            <div className='travel-card'>
                <img src={props.imageUrl} className="travel-img" />
                <div className='travel-text'>
                    <div className='location-el'>
                        <img src={locationImage} width="50px" />
                        <span>{props.location}</span>
                        <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <span>{props.startDate} - {props.endDate}</span>
                    <p>{props.description}</p>
                </div>
            </div>
            <hr />
        </>
    )
}
