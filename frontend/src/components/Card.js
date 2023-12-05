import React from "react"


export default function Card(props) {

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        return formattedDate;
      }
    
    return (
        <div className="card">
            <img
                src={'../images/bober.jpg'}
                className="card-image" 
            />
            <div className="card-stats">
                <h4>{props.original_title}</h4>
            </div>
            <div className="card-rating">
                <img src="https://i1.sndcdn.com/artworks-000365791161-ba17y3-t500x500.jpg" className="card-star" />
                <span className="gray">({props.vote_average})</span>
            </div>
                <div className="gray">{formatDate(props.release_date)}</div>
        </div>
    )
}