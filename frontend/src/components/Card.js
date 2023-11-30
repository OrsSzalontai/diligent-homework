import React from "react"


export default function Card(props) {
    console.log(props.coverImg)
    
    return (
        <div className="card">
            <img
                src={'https://i1.sndcdn.com/artworks-000365791161-ba17y3-t500x500.jpg'}
                className="card--image" 
            />
            <div className="card--stats">
                <img src="https://i1.sndcdn.com/artworks-000365791161-ba17y3-t500x500.jpg" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    )
}