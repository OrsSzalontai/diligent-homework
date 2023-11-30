import React, { useState, useEffect } from 'react';


export default function Notification({ result }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    let color = '';
    console.log(result)
    switch (result) {
        case 'error':
            color = 'red';
            break;
        case 'no-error':
            color = 'green';
            break;
        case 'unknown':
            color = 'orange';
            break;
        default:
            color = 'black'; // Default color
            break;
    }


    return (
        <>
            {isVisible && <div className='notification'
                style={{
                    backgroundColor: color,
                }}
            >
                {result}
            </div>}
        </>
    );
};

