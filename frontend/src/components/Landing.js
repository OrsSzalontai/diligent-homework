import React from 'react';
import bober from '../images/bober.jpg'

export default function Landing() {
    return (
        <div className="App-landing">
            <h4>Let's search some movies, Bober will help you!</h4>
            <img
                src={bober} alt="Bober"
                className='landing-image'
            />
        </div>
    )
}