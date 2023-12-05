import React from "react";
import star from "../images/star.png"

const baseUrl = 'https://image.tmdb.org/t/p/w500'; // Base URL provided by TMDb

export default function Card(props) {

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        return formattedDate;
      }
    
    return (
        <div className="card">
            <img
                src={`${baseUrl}${props.poster_path}`} alt="Movie Poster"
                className="card-image" 
            />
            <div className="card-stats">
                <h4>{props.original_title}</h4>
            </div>
            <div className="card-rating">
                <img src={star} className="card-star" alt="Rating star"/>
                <span className="gray">({props.vote_average}/10)</span>
            </div>
                <div className="gray">{formatDate(props.release_date)}</div>
        </div>
    )
}